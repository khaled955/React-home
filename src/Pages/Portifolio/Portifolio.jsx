/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Card from '../../Components/Card/Card'
import Modal from '../../Components/Modal/Modal'
import photo1 from "../../assets/imgs/poert1.png"
import photo2 from "../../assets/imgs/port2.png"
import photo3 from "../../assets/imgs/port3.png"

import photo4 from "../../assets/imgs/poert1.png"
import photo5 from "../../assets/imgs/port2.png"
import photo6 from "../../assets/imgs/port3.png"





export default function Portifolio() {

  const [modalSrc , setModalSrc] = useState(null)
  const [modalShow , setModalShow] = useState(false)
  
  const imgList = [{id:1,src:photo1},{id:2 , src:photo2},{id:3,src:photo3},{id:4 ,src:photo4},{id:5,src:photo5},{id:6,src:photo6}]

function handleModalShow (){
setModalShow(!modalShow)
}

function handleModleClose(){
  setModalShow(false)
}

function handleModalSrc (img){
  setModalSrc(img)
}




  return (
    <>
    
   <div>
<div className="container pt-28">
<h2 className='text-center uppercase font-black text-3xl text-gray-800'>portfolio component</h2>
{modalShow ? <Modal img={modalSrc} handleClose={handleModleClose}/> :""}

<div className='flex items-center gap-3 justify-center mb-8'>

<div className='w-20 h-1 bg-gray-800'></div>
<span>
<i className="fa-solid fa-star "></i>

</span>
<div className='w-20 h-1 bg-gray-800'></div>
</div>

<div className='grid grid-cols-12 gap-5 py-6'>


{imgList.map(img=> <Card key={img.id} img={img.src} handleModal={handleModalShow} handleSrc={handleModalSrc}/>)}

</div>


</div>
   </div>
    
    
    </>
  )
}
