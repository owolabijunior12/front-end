import { useEffect, useState } from 'react'
import axios from 'axios'
export default function useAUTH(code ) {
    const [accessToken, setAccessToken] =useState();
    const [refreshToken, setRefreshToken] =useState();
    const[ expiresin, setExpiresIn] =useState();
    useEffect(()=>{
        axios.post("http://localhost:3001/login",{
            code,          
        } )
        .then(res => {
            setAccessToken(res.data.accessToken);
            setRefreshToken(res.data.refreshToken);
            setExpiresIn(res.data.expiresIn);
            window.history.pushState({},null,'/')
        })
        // .catch(()=>{
        //     window.location='/';
        // })
    },[code])
    useEffect(()=>{

    },[])
    return accessToken
}


