# Work-In

Work-In is an app/website structurally inspired by the online travel booking site Airbnb. This is a clone that aims to use the model of the online reservation system for workspaces and short-term/one-time rental of establishments such as offices, rooms, clinics, etc.

  

# Welcome to Work-In!

You can try this app at the following link: [https://work-in-live.herokuapp.com/](https://work-in-live.herokuapp.com/)

 ## Technologies 
- Express.js
- Sequelize
- PostgreSQL
- React.js
- Redux
- Node.js
- AWS S3
- Pure CSS (no libraries or extensions)

 ## Relevant Documents
 - [Feature List](https://github.com/KagenLH/Work-In/wiki/Feature-List)
 - [Database Schema](https://github.com/KagenLH/Work-In/wiki/Database-Schema)
 - [React Component List](https://github.com/KagenLH/Work-In/wiki/React-Components-List)
 - [Frontend Routes](https://github.com/KagenLH/Work-In/wiki/Frontend-Routes)
 - [API Routes](https://github.com/KagenLH/Work-In/wiki/API-Routes)

![](https://lh6.googleusercontent.com/HdhVkPLn-8LnrA-qTLnLkNtR4Wh_XOgWIlpORwd2UEUHcNv-Ucjq_1FlcGlRS4ZYDKQ5a862EmiIhC-Yun6fr6xgWZCIBjcHr045eBwo40magSnPHpYdHsncJS-Rmkxsa635RAE)

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
## Technical Challenges and Implementation Details
### Image Viewer
When creating the image viewing overlay there was no pre-existing template available for me to work from, so I approached this task with a mind for designing my own from the ground up. This presented a number of challenges.

 #### 1. Displaying the image viewer properly
The image viewer should appear on the page and cover every other element on the page. When it is on it should be the only feature on the page. I decided to approach this by creating a new component [ImageViewer](https://github.com/KagenLH/Work-In/wiki/React-Components-List) to hold the image viewer in that would be of fixed position, cover the entire page, and obscure everything behind it:
```css
.image-viewer__container {
	position: fixed;
	background: rgba(0, 0, 0, 0.9);
	width: 100%;
	height: 100%;
	z-index: 99;
}
```
with a proper overlay in place, now the image viewer applet could be added over top of it.

#### 2. Ability to scroll images and show the correct image
I decided that the image viewer should only display one image at a time with the ability to switch between them with side arrow buttons. In order to manage the image that should be shown at any given time, a new `imageViewer` piece of global state was created and configured in the Redux store.  The `ImageViewer` component would read that slice of state to determine the `currentImage`, and display that image accordingly:
```jsx
<div
className="sliding-image__container"
>
	<ImageViewerImage  image={currentImage}/>
</div>
```
The images for the current listing page would be passed as a prop to the ImageViewer component, and anytime that one of the side arrow buttons is clicked, the `imageViewer.currentImage` slice of state is updated to the value of the next index in the images array.

## Future features and plans

* User Profiles and uploaded avatars

* User Inbox and Messages

* Ability to share listings with other platforms such as messaging, social media, etc.

* Google Geolocation and Google Maps API integration
