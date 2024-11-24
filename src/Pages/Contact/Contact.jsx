/* eslint-disable no-unused-vars */
import React from 'react'
import { Button, TextField } from '@mui/material'
import { Formik, useFormik } from 'formik'
export default function Contact() {

const formik = useFormik({
  initialValues:{
    name:"",
    age:"",
    email:"",
    password:""
  }
})




  return (
   <>
  <div >
  <div className='pt-32'>
    <h2 className='text-center font-black text-4xl mb-4 text-nav'>CONTACT SECTION</h2>

    <div className='flex items-center gap-3 justify-center mb-8'>

<div className='w-20 h-1 bg-nav'></div>
<span>
<i className="fa-solid fa-star "></i>

</span>
<div className='w-20 h-1 bg-nav'></div>
</div>
   </div>

<form  className='flex flex-col gap-4 mb-6 w-[50%] mx-auto'>

<TextField value={formik.values.name}  name='name' onChange={formik.handleChange}   id="filled-basic1" label="userName" variant="filled" />
<TextField name='age' value={formik.values.age}  onChange={formik.handleChange}  id="filled-basic2" label="userAge" variant="filled" />
<TextField name='password' value={formik.values.password}  onChange={formik.handleChange}  type='password'  id="filled-basic3" label="userPassword" variant="filled" />
<TextField name='email' value={formik.values.email} onChange={formik.handleChange}  type='email' id="filled-basic4" label="userEmail" variant="filled" />

<Button variant="contained">SEND MESSAGE</Button>



</form>

   











  </div>
   </>
  )
}
