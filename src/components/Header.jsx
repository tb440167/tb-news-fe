import React from 'react';
import '../App.css';
import { Link } from '@reach/router';
import UserChooser from './UserChooser';

const Header = props => {
  return (
    <header>
      <div>
      <Link to="/" >
        NorthCoders News
      </Link>
      </div>
      <div>
        <UserChooser handleUserChoice={props.handleUserChoice} />
      </div>
    </header>
  );
};

export default Header;
