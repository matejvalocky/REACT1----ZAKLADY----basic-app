import React from 'react'
import "./Track.css"
import OrderButton from './OrderButton'
import Counter from './Counter'



const Track = (props) => {
  return (


    <div className="track">
      <h1>Kniha číslo: {props.myid}</h1>
      <div className="book-info">
        <img src={props.myimage} alt="" />
        <p>{props.mytitle}</p>
      </div>

      <OrderButton></OrderButton>
      <Counter></Counter>
    </div>


  )
}

export default Track