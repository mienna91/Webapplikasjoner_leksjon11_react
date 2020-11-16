import React from 'react';
import { ThemeProvider } from 'styled-components';
import Routes from './src/routes/Routes';
import theme from './src/styles/theme';

const App = () => (
  <ThemeProvider theme={theme}>
    <Routes />
  </ThemeProvider>
);

export default App;
