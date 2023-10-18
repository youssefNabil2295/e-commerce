import axios from 'axios';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PropagateLoader ,  } from 'react-spinners';


const Register = () => {

const navigate =useNavigate()

const [errormasge, seterrormasge] = useState(null)
const [success, setsuccess] = useState(null)
const [loding, setloding] = useState(false)
async function submit(values){
    setloding(true)
  try{
    const {data} =  await axios.post(  ' https://route-ecommerce.onrender.com/api/v1/auth/signup' ,values )
    console.log( 'data',data);
    if (data.message === 'success'){
      setTimeout( function (){

        navigate('/login')
      },2000)
setsuccess('acount has created')

    }
  }
  catch(err){

      console.log('error' ,err.response.data.message);
    seterrormasge(err.response.data.message)
  }
  setloding(false)
}
let user ={name:'', phone:'',email:'',password:'',rePassword:''}

function validate(values){
  let errors = {};
  let phoneregex =/^\+?\d{1,3}[-.\s]?\(?\d{1,3}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/
  let emaileRegex =/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  if(!values.name){
      errors.name='name is required '
  }
  else if (values.name.length < 3){
    errors.name='name minLength is 3'
  }
  else if (values.name.length >20){
    errors.name= "max minLength is 3"
  }


  if (!phoneregex.test(values.phone)) {
    errors.phone='الرقم مطلوب'
  }

  else if (!phoneregex.test(values.phone)){
    errors.phone= 'الرقم غير صحيح '
  }


  if (!values.email
) {
    errors.email
='الاميل مطلوب'
  }


  else if (!emaileRegex.test(values.email
)){
    errors.email= 'الاميل غير صحيح'
  }


  if (values.password.length < 3){
    errors.password='ادخال كلمه السر'
  }
  else if (values.rePassword !== values.password){
    errors.rePassword= "كلمه السر غير مطابقه"
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










return <div>
<div className='w-75 mx-auto py-5 text-start vh-100'>
        <h3>Register now </h3>
        <form onSubmit={formik.handleSubmit}>



        {errormasge ?<div className="alert alert-danger p-2 m-1">{errormasge}</div>: ''}
        {success ?<div className="alert alert-success p-2 m-1"> {success}</div>: ''}
            <label htmlFor="name">Name : </label>
            <input className='form-control mt-1 mb-1' placeholder='Enter Name' type='text' id='name' name='name' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.name} />
                  {formik.errors.name &&formik.touched.name? <div className="alert  p-2 mt-2 alert-danger"> {formik.errors.name}</div>:''}
            

            <label htmlFor="phone">phone : </label>
            <input className='form-control mt-1 mb-1' placeholder='Enter Phone' type='tel' id='phone' phone='phone' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.phone} />
            {formik.errors.phone &&formik.touched.phone? <div className="alert  p-2 mt-2 alert-danger"> {formik.errors.phone}</div>:''}



            <label htmlFor="email">email : </label>
            <input className='form-control mt-1 mb-1' placeholder='Enter email' type='email' id='email' email='email' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email} />
            {formik.errors.email &&formik.touched.email? <div className="alert  p-2 mt-2 alert-danger"> {formik.errors.email}</div>:''}



            <label htmlFor="password">password : </label>
            <input className='form-control mt-1 mb-1' placeholder='Enter Password' type='password' id='password' password='password' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.password} />
            {formik.errors.password? <div className="alert  p-2 mt-2 alert-danger"> {formik.errors.password}</div>:''}


            <label htmlFor="rePassword">rePassword : </label>
            <input className='form-control mt-1 mb-1' placeholder='Enter RePassword' type='Password' id='rePassword' rePassword='rePassword' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.rePassword} />
            {formik.errors.rePassword &&formik.touched.rePassword? <div className="alert  p-2 mt-2 alert-danger"> {formik.errors.rePassword}</div>:''}

        <div className='d-flex justify-content-end align-items-center'>
        
        <button disabled={formik.isValid === false} type='submit' className=" btn bg-min text-white m-1">        
        
        {loding?<PropagateLoader color="#4ea934"    size={40}/> :'Register'}
        
        
        
        </button>


        
      
        

        
        </div>
        
        </form>
        
        </div>
  </div>;
}

export default Register;
