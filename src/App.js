import React, {useEffect, useState} from 'react';
import Login from './component/Login';
import Player from './component/Player';
import { getTokenFromUrl } from './spotify';
import './App.css';
function App() {
  const [token, setToken] =useState(null);
 useEffect(()=>{
  const hash = getTokenFromUrl();
  window.location.hash ="";
  const _token = hash.access_token;
    if (_token){
      setToken(_token);
    }
    console.log('i have a token ', token);
 },[])
  return (
    <div>
        {
      token?
      (
        <Player/>           
        ):(
        <Login/>
        )}
    </div>
  )
}


export default App
