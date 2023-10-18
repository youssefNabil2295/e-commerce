import React, {  useContext } from 'react';
import { CounterCountText } from '../../CountText/CounterCountText';
import { Navigate } from 'react-router-dom';

const Test = ({children}) => {
  
  
  const {token}=useContext(CounterCountText)

  if(token===null){
    return <Navigate to={'./'}/>
  }
  return (
    <div>
    {children}
    </div>
  );
}

export default Test;
