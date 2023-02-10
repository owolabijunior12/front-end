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
            console.log(res.data)
        })
    },[code])
}


