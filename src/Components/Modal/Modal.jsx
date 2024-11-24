/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import photo from "../../assets/imgs/poert1.png"
export default function Modal({img,handleClose}) {
  return (
    <>
    <div onClick={handleClose} className='w-full h-full bg-blue-700/30 fixed top-0 left-0  z-[9999] flex justify-center items-center'>
       <div className="img w-[50%]">

       <img className='w-full' src={img} alt="" />
       </div>
    </div>
    
    </>
  )
}
