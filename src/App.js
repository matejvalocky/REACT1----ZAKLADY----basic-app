import React from 'react'
import Nav from './components/Nav'
import Track from './components/Track'




const App = () => {

  const books = [
    {
      id: 1,
      image: "https://mrtns.sk/tovar/_l/1936/l1936755.jpg?v=17052949452",
      title: "Úsvit nadácie"
    },
    {
      id: 2,
      image: "https://mrtns.sk/tovar/_l/2315/l2315931.jpg?v=17052949402",
      title: "Stratený dedič"
    },
    {
      id: 3,
      image: "https://mrtns.sk/tovar/_l/2333/l2333973.jpg?v=17052949402",
      title: "Tajomné dedičstvo"
    },

    {
      id: 4,
      image: "https://mrtns.sk/tovar/_l/1895/l1895961.jpg?v=17053487412",
      title: "Môj prvý gróf"
    }
  ]





  return (
    <div>
      <Nav></Nav>
      <div className="wrapper">

        {books.map((book) => (
          <Track key={book.id} myid={book.id} myimage={book.image} mytitle={book.title} />
        ))}


        {/* <Track myid={books[0].id} myimage={books[0].image} mytitle={books[0].title} />
        <Track myid={books[1].id} myimage={books[1].image} mytitle={books[1].title} />
        <Track myid={books[2].id} myimage={books[2].image} mytitle={books[2].title} /> */}





      </div>


    </div>

  )
}

export default App