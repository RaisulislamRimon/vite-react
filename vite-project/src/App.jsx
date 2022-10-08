import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import { v4 as uuidv4 } from 'uuid';


function App() {
  const [count, setCount] = useState(0)
  
   let value1 = uuidv4(); 
   console.log(value1)
  
  
  let value2 = uuidv4(); 
  console.log(value2)
  
   let value3 = uuidv4(); 
   console.log(value3)
  
  
  let value4 = uuidv4(); 
  console.log(value4)
  
   let value5 = uuidv4(); 
   console.log(value5)
  
  
  let value6 = uuidv4(); 
  console.log(value6)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
