import React from 'react';
import { FormControl } from 'react-bootstrap';
import './styles.css';

const NavBar = props => {
  return (
    <div className="nav-bar">
      <div className="nav-bar__title">Books are better</div>
      <FormControl bsClass="nav-bar__search" type="text" placeholder="Search" />
    </div>
  );
};

export default NavBar;
