/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
export default function Card({img,handleModal,handleSrc}) {




  return (
   <>


   <div onClick={()=>{
    handleModal()
    handleSrc(img)

   }} className={'${color} col-span-12 md:col-span-4 flex justify-center items-center relative rounded-md overflow-hidden cursor-pointer group'}>
<div className='img' >
<img   className="w-full" src={img} alt="" />

</div>

<div className="overlay absolute left-0 bg-overLay w-full h-full flex justify-center items-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
<i className="fa-solid fa-plus text-[100px] text-white"></i>
</div>


   </div>



   </>
  )
}
