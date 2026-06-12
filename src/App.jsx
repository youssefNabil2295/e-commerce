import { RouterProvider, createHashRouter, } from 'react-router-dom';
import './App.css';
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import Cart from './Components/Cart/Cart';
import Notfound from './Components/Notfound/Notfound';
import Login from './Components/Login/Login';
import Categories from './Components/Categories/Categories';
import Products from './Components/Products/Products';
import Register from './Components/Register/Register';
import Brands from './Components/Barnds/Brands';
import Logout from './Components/Logout/Logout';
import CounterContTextprovider from './CountText/CounterCountText';
import Profile from './Components/profile/Profile';
import Test from './Components/test/Test';
import { QueryClient, QueryClientProvider } from 'react-query';
import ForgetPassword from './Components/ForgetPassword/ForgetPassword';
import ResetPassword from './Components/restpasword/ResetPassword';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import { CartContextProvider } from './CountText/CartContext';
import { Toaster } from 'react-hot-toast';
import Payment from './Components/Payment/Payment';
import AllOrders from './Components/AllOrders/AllOrders';
import { useState, useEffect } from 'react';
import SearchContextProvider from './CountText/SearchContext';



function useOnlineStatus() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    function handleOnline() { setIsOnline(true); }
    function handleOffline() { setIsOnline(false); }

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return isOnline;
}


let routers = createHashRouter([
  {
    path: '/', element: <Layout />, children: [
      { index: true, element: <Test><Home /></Test> },
      { path: 'home', element: <Test><Home /></Test> },
      { path: 'Categories', element: <Test><Categories /></Test> },
      { path: 'Brands', element: <Test><Brands /></Test> },
      { path: 'ForgetPassword', element: <ForgetPassword /> },
      { path: 'ResetPassword', element: <ResetPassword /> },
      { path: 'Cart', element: <Test><Cart /></Test> },
      { path: 'Payment', element: <Test><Payment /></Test> },
      { path: 'AllOrders', element: <Test><AllOrders /></Test> },
      { path: 'profile', element: <Test><Profile /></Test> },
      { path: 'Products', element: <Test><Products /></Test> },
      { path: 'ProductDetails/:id', element: <Test><ProductDetails /></Test> },
      { path: 'Register', element: <Register /> },
      { path: 'Login', element: <Login /> },
      { path: 'Logout', element: <Logout /> },
      { path: '*', element: <Notfound /> },
    ]
  }
])

function App() {
  const isOnline = useOnlineStatus();
  let client = new QueryClient()

  return <>
    <QueryClientProvider client={client}>
      <CartContextProvider>
        <CounterContTextprovider>
          <SearchContextProvider>
            <RouterProvider router={routers} />
          </SearchContextProvider>
        </CounterContTextprovider>
      </CartContextProvider>
      <Toaster />
    </QueryClientProvider>

    {!isOnline && (
      <div className="position-fixed bottom-0 start-0 end-0 p-3 bg-danger text-white text-center" style={{ zIndex: 9999 }}>
        <h5 className="mb-0"><i className="fa-solid fa-wifi me-2"></i> You are offline - Please check your internet connection</h5>
      </div>
    )}
  </>
}

export default App;
