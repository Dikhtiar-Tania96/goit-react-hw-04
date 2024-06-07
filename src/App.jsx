import { useEffect } from 'react'
import './App.css'
// import Loader from './components/Loader/Loader'

function App() {
  useEffect(()=>{
    const searchI = async () => {
      const data = await searchImage()
      console.log('data', data)
    }
    searchI()
  })

  return (
    <>
    </>
  )
}

export default App
