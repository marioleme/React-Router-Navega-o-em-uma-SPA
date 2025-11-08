import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import imagem from '../assets/img/doguito.svg'
import '../assets/css/componentes/cabecalho.css'

const Cabecalho = () => { 
  const [menuAberto, setMenuAberto] = useState(false)

  return(
    <header className="cabecalho container">
      <div className="menu-hamburguer" onClick={() => { setMenuAberto(!menuAberto) }}>
        <span className="menu-hamburguer__icone"></span>
      </div>
      <div className="cabecalho-container">
        <Link to="/" className="flex flex--centro">
          <img className="cabecalho__logo" src={imagem} alt="Logo Doguito"/>
          <h1 className="cabecalho__titulo">PetShop</h1>
        </Link>
      </div>

      <nav className={`menu-cabecalho ${menuAberto ? 'menu-cabecalho--ativo' : ''}`}>
        <a href="#" className="menu-cabecalho__fechar" onClick={() => { setMenuAberto(false) }}></a>
        <ul className="menu-itens">
          <li><Link to="/produtos" className="menu-item" onClick={() => setMenuAberto(false)}>Produtos</Link></li>
          <li><Link to="/" className="menu-item" onClick={() => setMenuAberto(false)}>Blog</Link></li>
          <li><Link to="/sobre" className="menu-item" onClick={() => setMenuAberto(false)}>Sobre</Link></li>
        </ul>
      </nav>
      <div className={`menu-cabecalho-background ${menuAberto ? 'menu-cabecalho--ativo' : ''}`}></div>
    </header>
  )
}


export default Cabecalho