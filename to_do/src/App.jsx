import { useState } from 'react'
import './App.css'
import AppHeader from '../components/heder'
import ToDoList from '../components/list-item'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <AppHeader/>
      <ToDoList/>
    </div>
  )
}

export default App
