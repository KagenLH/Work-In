const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const csrf = require("csurf");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");

const { environment } = require("./config");
const isProduction = environment === "production";

const app = express();

app.use(morgan('dev'));
app.use(cookieParser());
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