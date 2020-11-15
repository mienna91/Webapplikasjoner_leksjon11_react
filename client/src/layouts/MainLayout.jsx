import React from 'react';
import styled from 'styled-components';
import GlobalStyle from '../styles/GlobalStyle';
import Nav from '../components/Nav';

const StyledWrapper = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  margin: auto;
  min-height: 100%;
`;
const StyledHeader = styled.header`
  background: #fff;
  box-shadow: 1px 1px 2px #f5f5f5;
  margin-bottom: 60px;
  width: 100%;
`;

const MainLayout = ({ children }) => (
  <StyledWrapper>
    <GlobalStyle />
    <StyledHeader>
      <Nav />
    </StyledHeader>
    <StyledWrapper>{children}</StyledWrapper>
  </StyledWrapper>
);

export default MainLayout;
