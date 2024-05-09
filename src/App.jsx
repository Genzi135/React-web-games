
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Dashboard from './pages'
import TikTakToe from './pages/tik-tak-toe'
import Sudoku from './pages/sudoku'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path='/tic-tac-toe' element={<TikTakToe />} />
      <Route path='/sudoku' element={<Sudoku />} />
    </Routes>
  )
}

export default App
