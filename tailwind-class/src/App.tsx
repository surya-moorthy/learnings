import { useState } from 'react'
import './App.css'
import { SidebarNaive } from './components/Sidebar-naive'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
       <SidebarNaive/>
    </div>
  )
}

export default App
