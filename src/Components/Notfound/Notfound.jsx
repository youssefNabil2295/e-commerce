import React from 'react';
import { Helmet } from 'react-helmet';
import notFoundImg from '../../Assets/images/404.png';


const Notfound = () => {
  return ( <>
    <Helmet>
      <title>Page Not Found - Fresh Cart</title>
      <meta name="description" content="The page you are looking for was not found. Return to Fresh Cart homepage." />
      <meta name="robots" content="noindex, nofollow" />
    </Helmet>     
    <div className=' d-flex justify-content-center align-items-end'>
    <h1 className='mincolor mt-5'>NotFound</h1>
    </div>
    <img src={notFoundImg} alt="Page not found - 404 error"  className='w-100' />
    </>
    );
}

export default Notfound;
