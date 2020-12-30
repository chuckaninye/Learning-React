import React from "react";
import './index.css'

const firstBook = {
  title: 'The Very Hungry Caterpillar',
  image: 'https://images-na.ssl-images-amazon.com/images/I/71KilybDOoL._AC_UL200_SR200,200_.jpg',
  author: 'Eric Carle'
}

const secondBook = {
  title: 'If Animals Kissed Good Night',
  image: 'https://images-na.ssl-images-amazon.com/images/I/817T4J3dzhL._AC_UL200_SR200,200_.jpg',
  author: 'Ann Whitford Paul'
}


function App() {
  return (
    <div className="app">
    <Book 
    img={firstBook.image}
    title={firstBook.title}
    author={firstBook.author} />
    <Book 
    img={secondBook.image}
    title={secondBook.title}
    author={secondBook.author} />
    </div>
    
  );

}

const Book = (props) => {
  return (
    <article className="book">
    <img src={props.img}/> 
    <h1>{props.title}</h1>
    <h4>{props.author}</h4>
    </article>
  )
}

export default App;
