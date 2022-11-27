import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Container } from './components/Container'

function App() {

  const fetchData = async ()=> {
    const res = await fetch('https://api-yunagosh.vercel.app/',{
      mode:"cors",
    });
    const data = await res.json();
    console.log(data);
  }
  fetchData()

  return (
    <div className="App">
      <h1 className='game-title'>Juego de preguntas</h1>
      <Container/>
    </div>
  )
}

export default App
