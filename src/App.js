import { useEffect, useRef, useState } from 'react'

function App() {
  
  const [counter, setCounter] = useState(0)
  const [counter2, setCounter2] = useState(0)
  const divRef = useRef();

  useEffect(() => {
   console.log(divRef) 
  }, [counter])
  return (
    <div ref={divRef}>
      <h1>{counter}</h1>
      <h1>{counter2}</h1>
      <button onClick={() => setCounter(counter + 1)}>Counter 1</button>
      <button onClick={() => setCounter2(counter2 + 1)}>Counter 2</button>
    </div>
  );

}

export default App;
