import React from 'react'
import './assets/css/base/base.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './paginas/Home'
import Sobre from './paginas/Sobre'
import Pagina404 from './paginas/Pagina404'
import Cabecalho from './components/Cabecalho'
import Post from './paginas/Post'
import ListaPost from './components/ListaPost'
import Categoria from './paginas/Categoria'
import SubCategoria from './paginas/SubCategoria'
import Produtos from './paginas/Produtos'
import PostsPorCategoria from './paginas/PostsPorCategoria'
import Produto from './paginas/Produto'

function App() {

  return (
    <Router>
      <Cabecalho />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sobre' element={<Sobre />} />
        <Route path='/produtos' element={<Produtos />} />
        <Route path='/produto/:id' element={<Produto />} />
        <Route path='/categoria/:id' element={<Categoria />}>
          <Route index element={<PostsPorCategoria />} />
          <Route path=':subcategoria' element={<SubCategoria />} />
        </Route>
        <Route path='/posts/:id' element={<Post />} />
        <Route path='*' element={<Pagina404 />} />
      </Routes>
    </Router>
  )
}

export default App
