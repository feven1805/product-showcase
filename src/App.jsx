import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Productcard from './productcard'
import Productlist from './productlist'

function App() {

  return (
    
      <div>
         <h1>PRODUCTS</h1>
         <Productlist/>
      </div>
  )
}

export default App
