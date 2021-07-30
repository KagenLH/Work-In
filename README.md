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

## Navigating and using Work-In
### Home
When you navigate to the homepage of the application you will be presented with this splash screen:
![work-in-live herokuapp com_listings_4 (3)](https://user-images.githubusercontent.com/5733445/127585189-ecff3b21-7775-43a9-b0ee-c36354490132.png)

From here you can click on the login or signup links to bring up a modal where you can login if you have an account, signup if you don't, or otherwise just login with the Demo Host account.

![work-in-live herokuapp com_ (3)](https://user-images.githubusercontent.com/5733445/127588140-08148855-df5f-442d-905f-1eefb8ec7c59.png)

You can also begin searching immediately for a location or a listing by name, and suggested results will begin to appear for you.

![work-in-live herokuapp com_listings_4 (6)](https://user-images.githubusercontent.com/5733445/127586268-826a704d-096b-4e8d-9dad-08335ff71aab.png)

Clicking on one of those suggestions will direct you to the page for that listing:

![work-in-live herokuapp com_listings_8](https://user-images.githubusercontent.com/5733445/127588333-dfc3b05a-ae3f-41ea-9032-43fa8a07e796.png)

### Listings Search
Clicking on the "Listings" navigation link will take you to a page that shows all of the available listings on the platform.

![work-in-live herokuapp com_listings (2)](https://user-images.githubusercontent.com/5733445/127588574-b71a9d35-f093-4f03-9130-75ad1e46e026.png)

Alternatively, you can search for more specific listings in the search bar:

![work-in-live herokuapp com_listings (3)](https://user-images.githubusercontent.com/5733445/127588736-2c3e9ac1-ac66-4ae1-9c9b-63112b077a84.png)

Pressing enter during your search input or pressing the search icon will direct you to a page with listings that match only your search criterion:

![work-in-live herokuapp com_listings (5)](https://user-images.githubusercontent.com/5733445/127588909-e717c563-cfa3-4e17-8d4b-55441bf0fa29.png)

### Individual Listing Page
Clicking on the card for any of the listings on the listing search page will navigate to the specific page for that individual listing.

![work-in-live herokuapp com_listings_4](https://user-images.githubusercontent.com/5733445/127589152-38de7b1c-8ba3-471b-a650-1aaf92dedd4b.png)

From here you can click on the "Show All Photos" button to bring up an image viewer where you can look at images in better proportions and more detail. You can click the left or right arrows to navigate between the various images available for the listing.

![work-in-live herokuapp com_listings_4 (1)](https://user-images.githubusercontent.com/5733445/127589304-69e703ec-e3bf-467a-baf9-6b48a54b5a6d.png)

If you decide that you like the listing and would like to reserve it for some time, you can check availability and set your dates with the date pickers in the booking box.

![work-in-live herokuapp com_listings_4 (2)](https://user-images.githubusercontent.com/5733445/127589444-0960e8f7-cd0b-4cb9-912f-ef58ede497bc.png)

You will be presented with the details of the booking you have selected, the total for that reservation, and the math used to calculate that total. If you wish to proceed with booking, you can click the "Reserve This Listing" button. This will bring up a confirmation popup modal:

![work-in-live herokuapp com_listings (6)](https://user-images.githubusercontent.com/5733445/127589667-39feeb4f-40e2-4a78-bbf7-8d3e9ed362dc.png)

If you then click on the "Reserve Listing" button, your booking will be created! You have now reserved a workspace!


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
