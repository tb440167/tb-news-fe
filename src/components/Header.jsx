import React from 'react';
import '../App.css';
import { Link } from '@reach/router';

const Header = props => {
  return (
    <header className="Header">
      <p>
        <Link to="/">skg iogysoigy fsg;ulsyg soi;ygs dguls </Link>
      </p>

      <p className="UserLogin">User: {props.username}</p>
    </header>
  );
};

export default Header;
