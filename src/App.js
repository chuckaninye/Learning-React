
function FirstComponent(){
  return <h1>This is a component {"(with a jsx expression inside)."}</h1>
}

function App() {
  return (
    <FirstComponent />
  );
}

export default App;
