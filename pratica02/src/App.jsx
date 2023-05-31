import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Novo from './pages/Novo'
import Erro404 from './pages/Erro404'

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/novo' element={<Novo></Novo>}></Route>
      <Route path='*' element={<Erro404></Erro404>}></Route>

    </Routes>
    </BrowserRouter>
  )
}
