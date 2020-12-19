import { useState } from "react";


function GreetComponent(props){
  return <h1>Hello, {props.name} {props.children}</h1>
}
function App() {
  
  return (
    <>
    <GreetComponent name="Chuck">
      <p>Hi again!</p>
    </GreetComponent>
    </>
  );

}

export default App;
