import React from "react";
import './index.css'

const Book = () => {
  return (
    <article className="book">
    <Image /> 
    <Title />
    <Author />
    </article>
  )
}

const Image = () => {
  return <img src="https://images-na.ssl-images-amazon.com/images/I/71KilybDOoL._AC_UL200_SR200,200_.jpg" alt=''/>
}

const Author = () => <h3>Eric Carle</h3>

const Title = () => <h2>The Very Hungry Caterpillar</h2>
function App() {
  return (
    <div className="app">
    <Book />
    <Book />
    <Book />
    <Book />
    <Book />
    </div>
  );

}

export default App;
