import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div>
      <h1> Estoy en otra pagina!</h1>
      <Link to="/">Go back home</Link>
    </div>
  );
};
