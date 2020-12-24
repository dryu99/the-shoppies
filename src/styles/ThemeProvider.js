import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    primary: 'rgb(0, 204, 153)',
    secondary: '#343a40',
    background: '#eaeaea',
    foreground: 'white',
    border: '#d6d6d6'
  }
};

const ThemeProviderWrapper = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
};

export default ThemeProviderWrapper;