import './App.css'
// import TablaPedidos from './components/TablaPedidos'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home/Home'
import Inicio from './components/Inicio/Inicio'
import Perfil from './components/Perfil/Perfil'
import Ajustes from './components/Ajustes/Ajustes'
// import Contact from './components/Contact/Contact'
// import NotFound from './components/NotFound/NotFound'

function App() {

  return (
    <>
      {/* <BrowserRouter>
        1. La Navbar (Siempre visible)
        <nav className="p-4 bg-indigo-600 text-white flex gap-4 shadow-lg">
          <Link to="/" className="hover:underline font-bold">Inicio</Link>
          <Link to="/contacto" className="hover:underline font-bold">Contacto</Link>
        </nav>

        2. El Área de Contenido (Aquí cambian los componentes)
        <div className='p-10'>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/contacto' element={<Contact />}></Route>
            404 - Si no encuentra la ruta
            <Route path='*' element={<NotFound/>}></Route>
          </Routes>
        </div>

      </BrowserRouter> */}
      <BrowserRouter>
        <nav className="p-4 bg-indigo-600 text-white flex gap-4 shadow-lg">
          <Link to="/" className="hover:underline font-bold">Inicio</Link>
          <Link to="/perfil" className="hover:underline font-bold">Perfil</Link>
          <Link to="/ajustes" className="hover:underline font-bold">Ajustes</Link>
        </nav>
        <Routes>
          <Route path='/' element = {<Inicio/>}></Route>
          <Route path='/perfil' element = {<Perfil/>}></Route>
          <Route path='/ajustes' element = {<Ajustes/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
