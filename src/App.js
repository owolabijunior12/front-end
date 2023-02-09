import React, { useEffect, useState } from 'react'
import './App.css'
import Login from './component/Login'
import { getTokenFromUrl } from './spotify'
const App = () => {
  useEffect(()=>{
        const [token, setToken] = useState;
        const hash =getTokenFromUrl();
        window.location.hash = '';
        const _token = hash.access_token;
        if(_token){
          setToken(_token);
        }
        console.log("i have a token ",token);
  },[])
  return (
    <div className='App'>
        {
            token?(<h1>im in now</h1> ) : (<Login/>)
        }    
    </div>
  )
}

export default App

