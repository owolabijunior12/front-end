import React, { useEffect } from 'react'
import './App.css'
import Login from './component/Login'
import { getTokenFromUrl } from './spotify'
const App = () => {
  useEffect(()=>{
        const token =getTokenFromUrl();
          console.log("i have a token ",token);
  },[])
  return (
    <div className='APP'>
      <Login/>
    </div>
  )
}

export default App

