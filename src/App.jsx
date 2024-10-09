import { useState } from 'react'
import Budget from './components/Budget'
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify';
import "./index.css"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ToastContainer position="top-right" autoClose={1800} />
      <Budget />
    </>
  )
}

export default App
