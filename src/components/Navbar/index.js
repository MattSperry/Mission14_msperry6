import React from 'react';
import { Nav, NavLink, NavMenu } from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/" activeStyle>
            Home
          </NavLink>
          <NavLink to="/podcast" activeStyle>
            Podcast
          </NavLink>
          <NavLink to="/movieCollection" activeStyle>
            Movie Collection
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
