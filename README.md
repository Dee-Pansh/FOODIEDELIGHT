# Overview
> The FOODIEDELIGHT Restaurant Management Module allows restaurant administrators to manage restaurants on the platform. This includes adding, modifying, deleting, and listing restaurants. The data is fetched asynchronously from a backend application via API calls, ensuring a seamless and responsive user experience.

## Please find the screenshots for all the features inside Screenshots folder

## Features

- **Add Restaurant**: Allows administrators to add a new restaurant with fields such as name, description, location, and additional relevant information.
- **Modify Restaurant**: Enables administrators to update the details of an existing restaurant.
- **Delete Restaurant**: Provides the functionality to remove a restaurant from the platform.
- **List Restaurants**: Displays a list of all restaurants on the platform with the ability to search and filter.
- **Data Validations**: Ensures that all necessary fields are filled with valid data.
- **Exception Handling**: Handles errors gracefully, providing feedback to the user without disrupting the experience.
- **Responsiveness**: The application is designed to be responsive and works well on different screen sizes.

## API's CREATION
> ## Api are created using express.js and backend code also available inside backend folder

## API Links :

- GET_ALL_RESTAURANTS : "http://localhost:4000"
- POST_RESTAURANT : "http://localhost:4000/restaurants/post"
- UPDATE_RESTAURANT : "http://localhost:4000/restaurants"
- DELETE_RESTAURANT : "http://localhost:4000/restaurants"
- GET_RESTAURANT_BY_ID : "http://localhost:4000/restaurant"


## Concepts Used 
- Formik & Yup Packages for Field Validations 
- Props
- Component Resusability
- Routing
- State Management Hooks : useEffect, useState
- Custom Hooks 
- Async-Await 
- Api Handlings
- Customize Error Handlings
- Responsiveness
- Backend Code Creation using Mock Data
- CRUD Operations on Data Structure
- Modularity
- Navigate Hook
- Utils And Constants Handlings for Junit Testing
- Making Code Ready for Production Build
- Styling using TailwindCss

# Project Structure
<pre>
foodiedelight/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── Footer.js
│   │   ├── Restaurant.js
│   │   ├── Restaurants.js
│   │   ├── RestaurantSignup.js
│   │   └── ...
│   ├── pages/
│   │   ├── Home.js
│   │   └── Admin.js
│   ├── services/
│   │   └── api.js
│   ├── styles/
│   ├── App.js
│   ├── index.js
│   └── ...
├── .gitignore
├── package.json
└── README.md
</pre>

## Setup and Installation

Follow these steps to set up the project locally:

1. **Clone the Repository**:
   - Clone the project from GitHub to your local machine using the following command:
     ```bash
     git clone https://github.com/yourusername/foodiedelight.git
     ```

2. **Navigate to the Project Directory**:
   - Move into the project directory:
     ```bash
     cd foodiedelight
     ```

3. **Install Dependencies**:
   - Install the required npm packages by running:
     ```bash
     npm install
     ```

4. **Start the Development Server**:
   - Launch the development server with the following command:
     ```bash
     npm start
     ```
   - The application should now be running at `http://localhost:3000` in your web browser.

