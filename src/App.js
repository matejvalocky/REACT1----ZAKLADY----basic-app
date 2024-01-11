import React from 'react'
import Nav from './components/Nav'
import Track from './components/Track'


const App = () => {
  return (
    <div>
      <Nav></Nav>
      <div className="wrapper">
        <Track></Track>
        <Track></Track>
        <Track></Track>
        <Track></Track>
        <Track></Track>
        <Track></Track>
      </div>


    </div>

  )
}

export default App