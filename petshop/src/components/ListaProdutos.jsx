import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { busca } from '../api/api';

const ListaProdutos = ({ url }) => {
  const [produtos, setProdutos] = useState([])

  useEffect(() => {
    busca(url, setProdutos)
  }, [url])

  return (
    <section className="posts container">
      {
      produtos && produtos.map((produto) => (
        <Link to={`/produto/${produto.id}`} className="cartao-post" key={produto.id}>
          <article>
            <h3 className="cartao-post__titulo">{produto.nome}</h3>
            <p className="cartao-post__meta">{produto.descricao}</p>
            <p className="cartao-post__meta">R$ {produto.preco.toFixed(2)}</p>
          </article>
        </Link>
      ))}
    </section>
  );
};

export default ListaProdutos;