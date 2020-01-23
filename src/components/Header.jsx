import React from 'react';
import '../App.css';
import { Link } from '@reach/router';
import UserChooser from './UserChooser';

const Header = props => {
  return (
    <header className="Header">
      <Link to="/" className="header-title">
        NorthCoders News
      </Link>

      <div className="userLogin">
        <UserChooser handleUserChoice={props.handleUserChoice} />
      </div>
    </header>
  );
};

export default Header;
