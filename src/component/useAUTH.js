import React, { useEffect, useState } from 'react'
import axios from 'axios'
exports default function useAUTH(code ) {
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
    },[])
}


