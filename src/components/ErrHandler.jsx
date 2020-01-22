import React from 'react';

const ErrHandler = ({ err }) => {
  const msg = err ? err : 'Page not found';
  return <h2>{msg}</h2>;
};

export default ErrHandler;
