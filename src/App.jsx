
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Dashboard from './pages'
import TikTakToe from './pages/tik-tak-toe'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path='/tic-tac-toe' element={<TikTakToe />} />
    </Routes>
  )
}

export default App
