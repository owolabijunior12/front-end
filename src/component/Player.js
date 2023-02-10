import React from 'react'
import useAUTH from './useAUTH'
import LeftSide from '../component/DisplayUi/LeftSide';
import Middle from '../component/DisplayUi/Middle';
import RightSide from '../component/DisplayUi/RightSide';
import '../style/Player.css'
export default  function Player({code}) {
    const accessToken = useAUTH(code)
  return (
    <div className='Player'>
       <LeftSide/>
       <Middle/>
       <RightSide/>
    </div>
  )
}


