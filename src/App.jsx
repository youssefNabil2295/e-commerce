import { RouterProvider, createBrowserRouter, createHashRouter, } from 'react-router-dom';
import './App.css';
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import Cart from './Components/Cart/Cart';
import Navbar from './Components/Navbar/Navbar';
import Notfound from './Components/Notfound/Notfound';
import Footer from './Components/Footer/Footer';
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


let routers =createBrowserRouter([
{path:'/', element: <Layout/>  , children:[
  {index:true, element:   <Login/>  },
  {path:'home', element:<Test >  <Home/></Test>
},
{path:'Categories', element:<Test ><Categories/></Test>
},
  {path:'Brands', element:<Test ><Brands/></Test>
  },
  {path:'ForgetPassword', element:<ForgetPassword/>},
  {path:'ResetPassword', element:<ResetPassword/>
  },
  {path:'Cart', element:<Test ><Cart/></Test>},
  {path:'Cart', element:<Test ><Cart/></Test>},
  
  
  
  {path:'Payment', element:<Test ><Payment/></Test>},
  {path:'AllOrders', element:<Test ><AllOrders/></Test>},



  {path:'profile', element:<Test ><Profile/></Test>},


  {path:'Products', element:<Test ><Products/></Test>},
  {path:'ProductDetails/:id', element:<Test ><ProductDetails/></Test>},




  {path:'Navbar', element:<Navbar/>},
  {path:'Footer', element:<Footer/>},
  {path:'*', element:<Notfound/>},
  {path:'Footer', element:<Footer/>},
  {path:'Register', element:<Register/>},
  {path:'Login', element:<Login/>},
  {path:'Logout', element:<Logout/>},
]}


])
function App() {


  let client = new QueryClient()
  return <>



  <QueryClientProvider   client={ client } >



    
<CartContextProvider>  
<CounterContTextprovider>
    
          <RouterProvider router={routers}  />
    </CounterContTextprovider>
</CartContextProvider>
    
    
    <Toaster/>
    
    
    </QueryClientProvider>

  
    

    
  
  </>
  
  
}

export default App;
