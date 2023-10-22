import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../CountText/CartContext'
import { MoonLoader } from 'react-spinners'
import toast from 'react-hot-toast'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

export default function Cart() {

  const  { removeCartData , cartProducts ,numOfCartItems ,totalCartPrice ,UpdateCount, DeleteProduct}  = useContext (CartContext)


 async function incrementCount(id , count ){

  
 const res = await  UpdateCount(id , count )

 if(res.status=== "success"){
toast.success ("updated success")
 }
 else{
  toast.error("error on updated")
 }
}

async function deleteCart(){
  await removeCartData();


}

if(cartProducts === null ){
  return <div className="vh-100 d-flex justify-content-center align-items-center">
  <MoonLoader color="#36d7b7" />
  </div>
}


if(cartProducts.length === 0 ){
  return <div className="vh-100 d-flex justify-content-center align-items-center">
<h1   className='w-100' >no data found in your cart</h1> 

<Link className='btn btn-outline-success w-100' to='/Products'>   get some Products</Link>

 </div>
}

 
async function DeleteElement(id){


const res = await  DeleteProduct(id)
if(res.status === "success"){
toast.success('product remove')
}
else{
  toast.error('error occurred ')

}
}

  return <>
  <Helmet>
    <title>Cart</title>
  </Helmet>
  <div className='bg-main-light  '>
       <h1 className='m-3 mincolor'>shop Cart</h1>
      <h5 className='m-3'>total price: {totalCartPrice}</h5>
      <h5 className='m-3'>total items: {numOfCartItems}</h5>

      <button onClick={ deleteCart} className='btn  btn-outline-danger m-3'>Clear Cart  <i class="fa-solid fa-trash-can fa-beat-fade fa-sm" style={{color: "#a20202"}}></i></button>
      <Link to={'/Payment'} onClick={ ''} className='btn  btn-outline-info m-3'>Confirm payment </Link>
          
        {cartProducts.map(  function(product , idx ){
            console.log(product)
          
          return  <div key={idx} className="row m-2 shadow  p-2 border-bottom border-2 align-items-center">

        <div className="col-sm-1">

          <img src={product.product.imageCover} alt="" className='w-100 rounded-circle' />
        </div>


        
        <div className="col-sm-9">
          <h2 className='h6'>title {product.product.title}</h2>
          <h2 className='h6'>price {product.price} </h2>
          <button onClick={()=> DeleteElement(product.product.id)} className='btn  btn-outline-danger'>remove <i class="fa-solid fa-trash-can fa-beat-fade fa-sm" style={{color: "#a20202"}}></i></button>
        </div>




        <div className="col-sm-2">

          <div className="d-flex align-items-center">

            <button onClick={()=> incrementCount(product.product.id ,product.count +1 )} className='btn btn-outline-success'>+</button>
            <span className='mx-2'>{product.count}</span>
            <button onClick={()=> incrementCount(product.product.id ,product.count -1 )} className='btn btn-outline-success'>-</button>
          </div>

        </div>
      </div>} ) }
      

        
          
      {/* <div className="row my-2 p-2 border-bottom border-2 align-items-center">

        <div className="col-sm-1">

          <img src="" alt="" className='w-100' />
        </div>


        
        <div className="col-sm-9">
          <h2 className='h6'>title</h2>
          <h2 className='h6'>price</h2>
          <button className='btn  btn-outline-warning'>remove</button>
        </div>




        <div className="col-sm-2">

          <div className="d-flex align-items-center">

            <button className='btn btn-outline-success'>+</button>
            <span className='mx-2'>count</span>
            <button className='btn btn-outline-success'>-</button>
          </div>

        </div>
      </div> */}


      
  </div>
</>}
