import React from 'react'
import img from '../../assets/image.png'
export default function Message() {
  return (
    <>
     <div className='flex justify-center items-center mt-28'>
        <div className='mr-3'>
        <img src={img} alt="" />
        </div>
        <div>
        <h1>Message Sent Successfully</h1>
        </div>
    </div> 
    </>
  )
}
