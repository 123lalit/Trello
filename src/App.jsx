import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Main from './components/Main'

function App() {
  const [count, setCount] = useState(0)

  return (
      <>
      <Header></Header>
      <div className='content flex'>
        <Sidebar></Sidebar>
        <Main></Main>
      </div>
    </>
  )
}

export default App
