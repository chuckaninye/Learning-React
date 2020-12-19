import { useState } from "react";


function App() {

  const [counter, setCounter] = useState(0);

  return (
    <>
      <button onClick={updateCounter}>Increase counter</button>
      <h1>{counter}</h1>
    </>
  );

  function updateCounter(){
    setCounter(counter + 1);
  }
}

export default App;
