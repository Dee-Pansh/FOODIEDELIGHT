import React, { useEffect, useState } from 'react'
import ShimmerUI from './ShimmerUI';
import ErrorComponent from './ErrorComponent';
import Restaurant from './Restaurant';
import axios from 'axios';
import { GET_ALL_RESTAURANTS } from '../utils/constants';
const Restaurants = () => {
    const [Restaurants,setRestaurants]=useState([]);
    const [changeResList,setChangeResList]=useState(false);
    useEffect(()=>{
        const fetchData=async()=>{
            axios.get(GET_ALL_RESTAURANTS).then((response)=>{
              console.log("data from backend : ",response.data);
               setRestaurants(response.data);
            }).catch((error)=>{
              setRestaurants(["Server is not responding"])
            })
          };
          fetchData(); 
    },[changeResList]);

    if(Restaurants.length===0) return <ShimmerUI/>

    if(Restaurants[0]==="Server is not responding")
        return <ErrorComponent />

    return (
        <div className='flex flex-col justify-evenly my-2'>
            <h1 className='text-center font-extrabold text-2xl'>Restaurants</h1>
            <div className='flex flex-col justify-evenly border-2 border-yellow-600 rounded-md'>
           {Restaurants.map((restaurant,index)=>(
            <Restaurant data={restaurant} key={index} setChangeResList={setChangeResList} changeResList={changeResList}/>
           ))}
           </div>
        </div>
    )
}

export default Restaurants