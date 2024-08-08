import React from 'react'

const ErrorComponent = () => {
  return (
    <div className='h-[100vh] w-[100vw] flex items-center justify-center bg-black'>
        <h1 className='text-4xl text-red-800'>Server is not responding</h1>
    </div>
  )
}

export default ErrorComponent