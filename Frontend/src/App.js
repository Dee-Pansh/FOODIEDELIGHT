import React from "react";
import Header from "./components/Header.js"
import Body from "./components/Body.js"
import Footer from "./components/Footer.js"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RestaurantSignUp from "./components/RestaurantSignUp.js";
import EditRestaurant from "./components/EditRestaurant.js";
function App() {
  return (
    <div className="flex flex-col">
    <Header/>
    <RouterProvider router={routes}>
    <Body/>
    </RouterProvider>
    <Footer/>
    </div>
  );
}

const routes=createBrowserRouter([
  {
    path:"/",
    element:<Body/>
  },
  {
    path:'/signup',
    element:<RestaurantSignUp/>
  },
  {
    path:"/edit/:id",
    element:<EditRestaurant/>
  }
]);



export default App;
