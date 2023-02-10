import React, { useEffect, useState } from 'react'
import axios from 'axios'
function useAUTH() {
    const [accessToken, setAccessToken] =useState();
    const [refreshToken, setRefreshToken] =useState();
    const[ expiresin, setExpiresIn] =useState();
    useEffect(()=>{
        axios.post("http://localhost:3001/login",{
            code,
        } )
        .then(req => {
            console.log(res.data);
        })
    },[code])
  return (
    <div>
      
    </div>
  )
}

export default useAUTH
