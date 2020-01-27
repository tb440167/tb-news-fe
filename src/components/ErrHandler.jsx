import React from 'react';

const ErrHandler = ({ err }) => {
  const msg = err ? err : 'Oops! Page not found';
  return <h2>{msg}</h2>;
};

export default ErrHandler;
