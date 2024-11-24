/* eslint-disable no-unused-vars */

import React from 'react'
 import avatar from "../../assets/imgs/avataaars.svg"
export default function Home() {
  return (
    <>
    <div className=' pt-32 bg-home flex items-center flex-col gap-3 text-white h-screen'>

 <div className="img">
  <img className='size-60 rounded-full' src={avatar} alt="" />
 </div>

<h2 className='uppercase font-black text-3xl'>start frame work</h2>

<div className='flex gap-3 items-center'>

 <div className='w-20 h-1 bg-white'></div>
 <span>
<i className="fa-solid fa-star "></i>
</span>
 <div className='w-20 h-1 bg-white'></div>
</div>
<p>Graphic Artist - Web Designer - Illustrator</p>
    </div>
    </>
  )
}
