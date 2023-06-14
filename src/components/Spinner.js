import React, { Component } from 'react'
import Loading from './image/loading.gif'

export default class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img className='my-3' src={Loading} alt="Loading" style={{width:"2%"}}/>
      </div>
    )
  }
}
