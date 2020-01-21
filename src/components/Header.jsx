import React from 'react';
import { Link } from '@reach/router';

const Header = props => {
  return (
    <div>
      <Link to="/">
        <h1>Title Text Here</h1>
      </Link>
      <h5>logged in as: {props.username}</h5>
    </div>
  );
};

export default Header;
