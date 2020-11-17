import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { StyledNav, NavMenu, NavMenuItem } from '../styles/nav';

const Nav = () => {
  const { id } = useParams;
  return (
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
          <NavLink exact to="question/:id" activeClassName="active">
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
};

export default Nav;
