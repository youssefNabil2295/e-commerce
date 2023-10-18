import React from 'react';

const Notfound = () => {
  return ( <>     
    <div className=' d-flex justify-content-center align-items-end'>
    <h1 className='mincolor mt-5'>NotFound</h1>
    </div>
    <img src={require ('../../Assets/images/404.png') } alt="404"  className='w-100' />
    </>
    );
}

export default Notfound;
