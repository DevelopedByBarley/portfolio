
import { useEffect } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  useEffect(() => {
    axios.get('/test').then(res => console.log(res.data));
  }, [])


  return (
    <h1 className='bg-red-500'>Hello</h1>
  )
}

export default App
