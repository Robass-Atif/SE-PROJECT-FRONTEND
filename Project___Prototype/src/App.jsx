import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="bg-blue-500 text-white p-4">
      <h1 className="text-3xl font-bold">Hello, Tailwind CSS!</h1>
      <p>This is a test to see if Tailwind CSS is working.</p>
    </div>
    </>
  )
}

export default App
