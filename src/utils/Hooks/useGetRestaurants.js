import axios from 'axios';
import { useEffect, useState } from 'react'
import { GET_ALL_RESTAURANTS } from '../constants';

const useGetRestaurants = () => {
    const [restaurants,setRestaurants]=useState([]);

    useEffect(()=>{
fetchData();
    },[]);

    const fetchData=async()=>{
      axios.get(GET_ALL_RESTAURANTS).then((response)=>{
        console.log("data from backend : ",response.data);
         setRestaurants(response.data);
      }).catch((error)=>{
        setRestaurants(["Server is not responding"])
      })
    };

  return restaurants;

}

export default useGetRestaurants