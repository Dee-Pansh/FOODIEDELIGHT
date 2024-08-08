import React, { useEffect, useState } from 'react'
import useGetRestaurants from '../utils/Hooks/useGetRestaurants';
import ShimmerUI from './ShimmerUI';
import ErrorComponent from './ErrorComponent';
import Restaurant from './Restaurant';
const Restaurants = () => {
    const resList=useGetRestaurants();
    const [Restaurants,setRestaurants]=useState([]);

    useEffect(()=>{
     setRestaurants(resList);
    },[resList]);

    if(Restaurants.length===0) return <ShimmerUI/>

    if(Restaurants[0]==="Server is not responding")
        return <ErrorComponent />

    return (
        <div className='flex flex-col justify-evenly my-2'>
            <h1 className='text-center font-extrabold text-2xl'>Restaurants</h1>
            <div className='flex flex-col justify-evenly border-2 border-yellow-600 rounded-md'>
           {Restaurants.map((restaurant,index)=>(
            <Restaurant data={restaurant} key={index}/>
           ))}
           </div>
        </div>
    )
}

export default Restaurants