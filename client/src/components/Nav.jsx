import React from 'react';
import { NavLink } from 'react-router-dom';
import { StyledNav, NavMenu, NavMenuItem } from '../styles/nav';

const Nav = () => (
  <StyledNav>
    <NavMenu>
      <NavMenuItem>
        <NavLink exact to="/" activeClassName="active">
          Create user
        </NavLink>
      </NavMenuItem>
      <NavMenuItem>
        <NavLink exact to="/createpoll" activeClassName="active">
          Create poll
        </NavLink>
      </NavMenuItem>
      <NavMenuItem>
        <NavLink exact to="/question" activeClassName="active">
          Question
        </NavLink>
      </NavMenuItem>
      <NavMenuItem>
        <NavLink exact to="/results" activeClassName="active">
          Results
        </NavLink>
      </NavMenuItem>
    </NavMenu>
  </StyledNav>
);

export default Nav;
