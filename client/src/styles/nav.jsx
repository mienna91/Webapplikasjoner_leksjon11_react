import styled from 'styled-components';

const StyledNav = styled.nav`
  width: 100%;
  padding: 0 0 8px;
  background-color: ${(props) => props.theme.colors.primary};
  border-bottom: 2px solid ${(props) => props.theme.colors.darkSeconDary};
`;

const NavMenu = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
  padding: 0 20px;
  align-items: center;
`;

const NavMenuItem = styled.li`
  padding: 0 20px;

  &:first-child {
    padding-left: 0;
  }

  & > a {
    color: #333;
    display: block;
    font-size: 14px;
    font-weight: 700;
    line-height: 3.456;
    padding: 5px 0 0;
    text-decoration: none;

    &.active {
      color: #ffffff;
      border-bottom: 2px solid #ffffff;
    }
  }
`;

export { StyledNav, NavMenu, NavMenuItem };
