import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalUserState } from './src/context/GlobalUserContext';
import Routes from './src/routes/Routes';
import theme from './src/styles/theme';

const App = () => (
  <GlobalUserState>
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  </GlobalUserState>
);

export default App;
