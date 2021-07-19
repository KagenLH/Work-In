const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const csrf = require("csurf");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
const { ValidationError } = require("sequelize");

const routes = require("./routes");

const { environment } = require("./config");
const isProduction = environment === "production";

const app = express();

// Application middlewares, each is evaluated in the order that they are attached.
app.use(morgan('dev'));
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if(!isProduction) {
    app.use(cors());
}

app.use(helmet({
    contentSecurityPolicy: false
}));

app.use(
    csrf({
        cookie: {
            secure: isProduction,
            sameSite: isProduction && "Lax",
            httpOnly: true
        }
    })
);

// Application routers
app.use(routes);

app.use((req, res, next) => {
    const err = new Error("The requested resource couldn't be found.");
    err.title = "Resource Not Found";
    err.errors = ["The requested resource couldn't be found."];
    err.status = 404;
    next(err);
});

app.use((err, req, res, next) => {
    if(err instanceof ValidationError) {
        err.errors = err.errors.map((e) => e.message);
        err.title = 'Validation error';
    }

    next(err);
});

app.use((err, req, res, next) => {
    res.status(err.status || 500);
    console.error(err);
    res.json({
        title: err.title || 'Server Error',
        message: err.message,
        errors: err.errors,
        stack: isProduction ? null : err.stack
    });
});



module.exports = app;