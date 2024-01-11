import React from 'react'
import Nav from './components/Nav'
import Track from './components/Track'




const App = () => {

  const books = [
    {
      id: 1,
      image: "https://www.knihydobrovsky.cz/thumbs/book-list/mod_eshop/produkty/h/harry-potter-a-kamen-mudrcu-9788000061917.jpg.webp",
      title: "Harry Potter a Jozef mudrců"
    },
    {
      id: 2,
      image: "https://www.knihydobrovsky.cz/thumbs/book-list/mod_eshop/produkty/333420609/10.jpg.webp",
      title: "Harry Potter a Tajemná komnata"
    },
    {
      id: 3,
      image: "https://www.knihydobrovsky.cz/thumbs/book-list/mod_eshop/produkty/h/harry-potter-a-vezen-z-azkabanu-9788000063393.jpg.webp",
      title: "Harry Potter a Vězeň z Azkabanu"
    },
  ]



  return (
    <div>
      <Nav></Nav>
      <div className="wrapper">


        <Track myid={books[0].id} myimage={books[0].image} mytitle={books[0].title} />
        <Track myid={books[1].id} myimage={books[1].image} mytitle={books[1].title} />
        <Track myid={books[2].id} myimage={books[2].image} mytitle={books[2].title} />

       



      </div>


    </div>

  )
}

export default App