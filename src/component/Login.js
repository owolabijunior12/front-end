import React from 'react';
import '../style/login.css';
import { accessUrl } from '../spotify';

const Login = () => {
  return (
    <div className='login'>
         <img 
            src= 'data:image/jpeg;base64,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' 
            alt='Login'
            />
            <a href={accessUrl}>Login</a>
    </div>
  )
}

export default Login
