import  { createContext, useEffect, useState } from 'react';


export let CounterCountText = createContext();


export default  function CounterContTextprovider({children}) {

  


  const [token, settoken] = useState(null)

  useEffect (function(){ 
    if(localStorage.getItem ('tkn')!== null){
      settoken(localStorage.getItem ('tkn'))
    }
   },[]);
  return <CounterCountText.Provider value={{token, settoken }} >
    
  {children}
  
  
  </CounterCountText.Provider>
}



