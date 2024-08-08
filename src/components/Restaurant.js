import React from 'react'

const Restaurant = ({data}) => {
  const {name,menu,category,city,address,phone}=data;
  return (
    <div className='flex flex-row justify-evenly m-4 shadow-md '>
      <div className='w-[50%]'>
      <h1>Name : {name}</h1>
        <h2>Menu : {menu}</h2>
        <p>Category : {category}</p>
      </div>
      <div className='w-[50%]'>
        <p>City : {city}</p>
        <p>Address : {address}</p>
        <p>Phone : {phone}</p>
    </div>
    </div>
  )
}

export default Restaurant