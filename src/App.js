import React from "react";
import './index.css'

const books = [
  {
    id: 1,
    title: 'The Very Hungry Caterpillar',
    img: 'https://images-na.ssl-images-amazon.com/images/I/71KilybDOoL._AC_UL200_SR200,200_.jpg',
    author: 'Eric Carle'
  }, 
  {
    id: 2,
    title: 'If Animals Kissed Good Night',
    img: 'https://images-na.ssl-images-amazon.com/images/I/817T4J3dzhL._AC_UL200_SR200,200_.jpg',
    author: 'Ann Whitford Paul'
  },
  {
    id: 3,
    title: 'Brown Bear, Brown Bear, What Do You See?',
    img: 'https://images-na.ssl-images-amazon.com/images/I/51430n+9jlL._SX355_BO1,204,203,200_.jpg',
    author: 'Bill Martin Jr.'
  },
];

function App() {
  return (
    <div className="app">
    {books.map((books) => {
      return <Book key={books.id} {...books}/>
    })
  }   
    </div>
  );
 
}

const Book = (props) => {
  const {img, title, author} = props

  function mouseHandler(title){
    console.log(title)
  }

  function clickHandler(author){
    console.log(author)
  }
  return (
    <article className="book" onMouseOver={() => mouseHandler(title)}>
    <img src={img} alt=''/> 
    <h1>{title}</h1>
    <h4>{author}</h4>
    <button type="button" onClick={() => clickHandler(author)}>reference example</button>
    </article>
  )
}

export default App;
