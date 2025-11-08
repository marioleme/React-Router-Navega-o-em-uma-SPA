import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { busca } from '../api/api'
import '../assets/css/post.css'

const Produto = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const [produto, setProduto] = useState({})

  useEffect(() => {
    busca(`/produtos/${id}`, setProduto)
      .catch(() => {
        navigate('/404')
      })
  }, [id])

  return (
    <main className="container flex flex--centro">
      <article className="cartao post">
        <h2 className="cartao__titulo">{produto.nome}</h2>
        <p className="carta__texto">{produto.descricao}</p>
        <p className="carta__texto">R$ {produto.preco ? produto.preco.toFixed(2) : '0.00'}</p>
      </article>
    </main>
  )
}

export default Produto