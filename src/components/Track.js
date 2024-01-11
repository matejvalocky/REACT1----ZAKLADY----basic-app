import React from 'react'
import "./Track.css"
import OrderButton from './OrderButton'



const Track = (props) => {
  return (
    
      
      <div className="track">
        <h1>Mix číslo: {props.myid}</h1>
        <p>{props.mytitle}</p>
        <OrderButton></OrderButton>
    </div>
    
   
  )
}

export default Track