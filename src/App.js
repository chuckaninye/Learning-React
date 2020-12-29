import React, { createContext } from "react";

const Book = () => {
  return (
    <>
    <Image /> 
    <Title />
    <Author />
    </>
  )
}

const Image = () => {
  return <img src="https://images-na.ssl-images-amazon.com/images/I/71KilybDOoL._AC_UL200_SR200,200_.jpg"/>
}

const Author = () => <h3>Eric Carle</h3>

const Title = () => <h2>The Very Hungry Caterpillar</h2>
function App() {
  return (
    <>
    <Book />
    </>
  );

}

export default App;
