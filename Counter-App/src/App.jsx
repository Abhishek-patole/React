import { useState } from 'react'


function App() {
  
  let [counter, setCounter] = useState(0);

  const addValue = () => {
    setCounter(counter + 1);
  }

  const removeValue = () => {
    setCounter(counter - 1);
  }

  return (
    <>
     <h1> Counter App</h1>
     <button onClick={ addValue }>Increament</button>
     <h2>Count : {counter} </h2>
     <button onClick={ removeValue }>Decreament</button>
    </>
  )
}

export default App
