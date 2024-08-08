import React from 'react'
import axios from 'axios';
import { DELETE_RESTAURANT, UPDATE_RESTAURANT } from '../utils/constants';
import { useNavigate } from 'react-router-dom';
const Restaurant = ({data,setChangeResList,changeResList}) => {
  const {name,menu,category,city,address,phone}=data;
  const navigate=useNavigate();

 const handleUpdate=(id)=>{
  navigate(`/edit/${id}`);
  }


 const handleDelete=async(id)=>{
     try {
      console.log("Under delete callback");
      
    const response= await axios.delete(`${DELETE_RESTAURANT}/${id}`);
    alert("Restaurant deleted success")
    setChangeResList(!changeResList);
     } catch (error) {
      alert("Restaurant not found on database");
      
     }
  }
  return (
    <div className='flex flex-row justify-evenly m-4 shadow-md '>
      <div className='w-[33%]'>
      <h1>Name : {name}</h1>
        <h2>Menu : {menu}</h2>
        <p>Category : {category}</p>
      </div>
      <div className='w-[33%]'>
        <p>City : {city}</p>
        <p>Address : {address}</p>
        <p>Phone : {phone}</p>
    </div>
    <div className='w-[33%]'>
       <button className='text-red-500 font-bold text-xl  border border-black rounded-md p-2' 
       onClick={()=>{handleDelete(data.id)}}>
        Delete
       </button>
       <button className='text-yellow-500 font-bold text-xl border border-black rounded-md p-2 mx-2' onClick={()=>{
        handleUpdate(data.id)
       }}>
        Update
       </button>
    </div>
    </div>
  )
}

export default Restaurant