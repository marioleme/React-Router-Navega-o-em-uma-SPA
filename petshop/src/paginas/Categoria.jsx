import React, { useState, useEffect } from 'react'
import { useParams, Link, useResolvedPath, Outlet } from 'react-router-dom'
import ListaPost from '../components/ListaPost'
import ListaCategorias from '../components/ListaCategorias'
import { busca } from '../api/api'
import '../assets/css/blog.css'
import SubCategoria from './SubCategoria'

const Categoria = () => {
  const { id } = useParams()
  const [subcategorias, setSubcategorias] = useState([])
  const resolvedUrl = useResolvedPath("")

  useEffect(() => {
    busca(`/categorias/${id}`, (categoria) => {
      setSubcategorias(categoria.subcategorias)
    })
  }, [id])
  
  return (
    <>
      <div className="container">
        <h2 className="titulo-pagina">Pet Notícias</h2>
      </div>
      <ListaCategorias />
      <ul className="lista-categorias container flex">
        {subcategorias.map((subcategoria) => (
          <li className={`lista-categorias__categoria lista-categorias__categoria--${id}`} key={subcategoria}>
            <Link to={`${resolvedUrl.pathname}/${subcategoria}`}>
              {subcategoria}
            </Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </>
  )
}

export default Categoria
