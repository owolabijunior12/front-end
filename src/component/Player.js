import React from 'react'
import useAUTH from './useAUTH'

export default  function Player({code}) {
    const accessToken = useAUTH(code)
  return (
    <div>
      {code}    
    </div>
  )
}


