import React from 'react'
import "./Track.css"
import OrderButton from './OrderButton'
import Counter from './Counter'



const Track = (props) => {
  return (
    
      
      <div className="track">
        
        <img src={props.myimage} alt="" />
        <h1>Kniha číslo: {props.myid}</h1>
        <p>{props.mytitle}</p>
        <OrderButton></OrderButton>
        <Counter></Counter>
    </div>
    
   
  )
}

export default Track