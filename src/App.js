import { useState } from "react";


function App() {

  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  
  return (
    <>
    <span>{userName === 'Chuck' && password === 'Aninye' && <p>Hello Chuck Aninye</p>}</span>
    <input type="text" value={userName} onChange={updateUserName}/>
    <input type="password" value={password} onChange={updatePassword}/>
    <button onClick={submitForm}>Submit Form</button>
    </>
  );

  function updateUserName(event){
    setUserName(event.target.value)
    }
  
  function updatePassword(event){
    setPassword(event.target.value)
  }

  function submitForm(){
    console.log(userName, password)
  }

}

export default App;
