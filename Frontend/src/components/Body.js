import React, { useEffect, useState } from 'react'
import Restaurants from './Restaurants';
import RestaurantSignUp from './RestaurantSignUp';
const Body = () => {
    const [btnClicked,setBtnClicked]=useState(false);
    useEffect(()=>{
  console.log("component rendered");
    },[btnClicked]);
    return (
        <div className='flex flex-col mx-auto w-[75%] border border-black rounded-md px-5 py-8 my-12'>
            {
                btnClicked===false
                ?
                <>
            <Restaurants className="overflow-scroll"/>
            <div className='text-center'>
                <button type="submit" className='bg-green-500 p-2 rounded-md font-bold' onClick={()=>{setBtnClicked(!btnClicked)}}>Add Restaurant</button>
            </div>
            </>
            :
            <>
            <RestaurantSignUp btnClicked={btnClicked} setBtnClicked={setBtnClicked}/>
            </>
             }
        </div>
    )

}

export default Body