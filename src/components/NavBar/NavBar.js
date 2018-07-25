import React from 'react';
import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
  FormGroup,
  FormControl,
} from 'react-bootstrap';
import './styles.css';

const NavBar = props => {
  return (
    <Navbar staticTop fluid collapseOnSelect inverse>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#brand">Books are better</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavItem eventKey={1} href="#">
            Link
          </NavItem>
          <NavItem eventKey={2} href="#">
            Link
          </NavItem>
          <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>Action</MenuItem>
            <MenuItem eventKey={3.2}>Another action</MenuItem>
            <MenuItem eventKey={3.3}>Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.3}>Separated link</MenuItem>
          </NavDropdown>
        </Nav>
        <Navbar.Form pullRight>
          <FormGroup>
            <FormControl bsClass="search" type="text" placeholder="Search" />
          </FormGroup>{' '}
        </Navbar.Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
