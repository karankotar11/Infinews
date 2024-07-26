import React from 'react'
import loading from './load3.gif'


const Spinner=()=>  {

    return (
      <div className='text-center'> 
      <br/>
      <br/>
      <br/>
        <img src={loading} alt='loadding' style={{marginBottom:'400px'}}/>
      </div>
    )
  
}
export default Spinner;
