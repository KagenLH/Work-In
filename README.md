# Work-In

Work-In is an app/website structurally inspired by the online travel booking site Airbnb. This is a clone that aims to use the model of the online reservation system for workspaces and short-term/one-time rental of establishments such as offices, rooms, clinics, etc.

  

# Welcome to Work-In!

You can try this app at the following link: [https://work-in-live.herokuapp.com/](https://work-in-live.herokuapp.com/)

  

![](https://lh6.googleusercontent.com/HdhVkPLn-8LnrA-qTLnLkNtR4Wh_XOgWIlpORwd2UEUHcNv-Ucjq_1FlcGlRS4ZYDKQ5a862EmiIhC-Yun6fr6xgWZCIBjcHr045eBwo40magSnPHpYdHsncJS-Rmkxsa635RAE)
  ## Relevant Documents
  - [Feature List](https://github.com/KagenLH/Work-In/wiki/Feature-List)
  - [Database Schema](https://github.com/KagenLH/Work-In/wiki/Database-Schema)
  - [React Component List](https://github.com/KagenLH/Work-In/wiki/React-Components-List)
  - [Frontend Routes](https://github.com/KagenLH/Work-In/wiki/Frontend-Routes)
  ## Running Work-In on your local machine
Before running Work-In in the development environment you'll need an up to date installation of Node.js and PostgreSQL. These instructions will assume that you already have both of those already installed and configured. Also assure ahead of time that no other processes are running on port 5000.

From wherever you wish to place your development installation:
```bash
git clone https://github.com/KagenLH/Work-In.git
```
Once the repository is pulled from GitHub, you're ready to start setup.
First install dependencies:
```bash
cd Work-In
npm install
```
  then migrate and seed the database
```bash
npm run sequelize db:migrate
npm run sequelize db:seed:all
```
Now you're ready to start the API server:
```bash
cd backend
npm start
```
Open another terminal window, and from the root project directory navigate to the front-end and start the React server:
```bash
cd frontend
npm start
```

## Technologies 
- Express.js
- Sequelize
- React
- Redux
- Node.js
- AWS S3
- Pure CSS (no libraries or extensions)

## Future features and plans

* User Profiles and uploaded avatars

* User Inbox and Messages

* Ability to share listings with other platforms such as messaging, social media, etc.

* Google Geolocation and Google Maps API integration
