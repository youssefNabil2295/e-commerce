import axios from 'axios';
import { useFormik } from 'formik';
import React, { useContext, useState } from 'react';
import {  Link, useNavigate } from 'react-router-dom';
import {  SyncLoader } from 'react-spinners';
 import { CounterCountText } from '../../CountText/CounterCountText';
import { Helmet } from 'react-helmet';
const Login = () => {
  
  
   const{settoken}= useContext(CounterCountText)
  
const navigate =useNavigate()


const [errormasge, seterrormasge] = useState(null)
const [success, setsuccess] = useState(null)
const [loding, setloding] = useState(false)
async function submit(values){
    setloding(true)
  try{
    const {data} =  await axios.post(  ' https://route-ecommerce.onrender.com/api/v1/auth/signin' ,values )
    console.log( 'data',data);




    if (data.message === 'success'){


      settoken(data.token);
            localStorage.setItem('tkn', data.token);


      setsuccess('welcome back');


      setTimeout( function (){navigate('/Products')},2000)
    }
    
    
  }
  catch(err){ 
     seterrormasge( err.response.data.message ) 
   
}
  setloding(false)

}
let user ={email:'',password:''}

function validate(values){
  let errors = {};
  let emaileRegex =/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/






  if (!values.email) {
    errors.email='الاميل مطلوب'
  }


  else if (!emaileRegex.test(values.email)){
    errors.email= 'الاميل غير صحيح'
  }


  if (values.password.length < 3){
    errors.password='ادخال كلمه السر'
  }

  seterrormasge(null)
  return errors;
}
// const form = {name:'', phone:'',email:'',password:'',rePassword:''}
let formik = useFormik({

  initialValues:user, 
  validate,
  onSubmit:submit
})










return <>
<Helmet>
    <title>Login</title>
  </Helmet>
<div className='bg-main-ligh  m-3 vh-100'>

<div className='w-75 mx-auto py-5 text-start '>
        <h2 className=''>Login  </h2>
        <form className=' ' onSubmit={formik.handleSubmit}>



        {errormasge ?<div className="alert alert-danger p-2 m-1">{errormasge}</div>: ''}
        {success ?<div className="alert alert-success p-2 m-1"> {success}</div>: ''}
      

        


            <label htmlFor="email">email : </label>
            <input className='form-control mt-1 mb-1' placeholder='Enter email' type='email' id='email' email='email' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email} />
            {formik.errors.email &&formik.touched.email? <div className="alert  p-2 mt-2 alert-danger"> {formik.errors.email}</div>:''}



            <label htmlFor="password">password : </label>
            <input className='form-control mt-1 mb-1' placeholder='Enter Password' type='password' id='password' password='password' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.password} />
            {formik.errors.password? <div className="alert  p-2 mt-2 alert-danger"> {formik.errors.password}</div>:''}


            <Link className='  m-3 text-danger'   to={'/ForgetPassword'}> ForgetPassword ...? </Link>
          
        <div className='d-flex justify-content-end align-items-center'>
        
        <button disabled={formik.isValid === false} type='submit' className=" btn bg-min text-white m-1">        
        {loding? <div><SyncLoader color="#fff" /></div>
        :'Login'}
        
        
        
        </button>
        

        
      
        

        
        </div>
        
        </form>
        
        </div>
  </div>;
</>}

export default Login;
