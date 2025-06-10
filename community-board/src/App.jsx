import { useState } from 'react'
import Restaurants from './components/Restaurants'
import './App.css'

function App() {
  return(
    <div className='"App'>
      <header>
        <h1>Flushing's Chinese Restaurants Picks</h1>
        <h2>Discover local favorities in the heart of Queens, NY</h2>
      </header>
      <Restaurants />
    </div>
  )
}

export default App
