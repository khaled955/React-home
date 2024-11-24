/* eslint-disable no-unused-vars */

import React from 'react'

export default function Footer() {
  return (
   <>
    <footer className=' text-white  w-full '>
    <div className='bg-nav py-16'>
    <div className="container">

<div className="footer-info flex flex-col gap-16 items-center justify-center md:gap-0 md:flex-row md:justify-between ">

 <div className="locaton-info w-full md:w-auto flex flex-col justify-center items-center gap-3">
   <h3 className='font-bold'>LOCATION</h3>
   <p>2215 John Daniel Drive</p>
   <p>Clark, MO 65243</p>
 </div>

 <div className="locaton-contact  w-full md:w-auto  flex flex-col justify-center items-center gap-3">
   <h3  className='font-bold'>AROUND THE WEB</h3>
   <ul className='flex gap-4'>
    <li className='border-2 border-white rounded-full size-10 flex justify-center items-center'>
      <a href="#">
        <i className='fa-brands fa-facebook'></i>
      </a>
    </li>
    <li className='border-2 border-white rounded-full size-10 flex justify-center items-center' >
      <a href="#">
        <i className='fa-brands fa-x'></i>
      </a>
    </li>
    <li className='border-2 border-white rounded-full size-10 flex justify-center items-center'>
      <a href="#">
        <i className='fa-brands fa-instagram'></i>
      </a>
    </li>
    <li className='border-2 border-white rounded-full size-10 flex justify-center items-center'>
      <a href="#">
        <i className='fa-brands fa-linkedin'></i>
      </a>
    </li>
   </ul>
  
 </div>

 <div className="footer-freelance w-full md:w-auto flex flex-col justify-center items-center gap-3">
  <h2 className='font-bold'> ABOUT FREELANCER</h2>
  <p>Freelance is a free to use, licensed Bootstrap theme</p>
  <p>created by Route</p>
 </div>

</div>





 </div>
    </div>



     <div className="copy-write bg-gray-950 py-5">
      <p className='text-center'>Copyright © Your Website 2021</p>

     </div>
    </footer>
  
   </>
  )
}
