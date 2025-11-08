import React from 'react';
import { useParams } from 'react-router-dom';
import ListaPost from '../components/ListaPost';

const PostsPorCategoria = () => {
  const { id } = useParams();
  return (
    <ListaPost url={`/posts?categoria=${id}`} />
  );
};

export default PostsPorCategoria;