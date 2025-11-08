import React from 'react';
import ListaProdutos from '../components/ListaProdutos';

const Produtos = () => {
  return (
    <main>
      <ListaProdutos url={'/produtos'} />
    </main>
  );
};

export default Produtos;