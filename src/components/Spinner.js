import React from 'react'
import Loading from './image/loading.gif'

export default function Spinner() {
    return (
      <div className='text-center'>
        <img className='my-3' src={Loading} alt="Loading" style={{width:"2%"}}/>
      </div>
    )
}
