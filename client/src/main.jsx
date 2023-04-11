import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import { Routes } from './routes';

import GlobalStyles from './Styles/global';
import theme from './styles/theme';


import { Search } from './pages/Search';
import { ShowSearch } from './pages/ShowSearch';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
         <Routes />
    </ThemeProvider>
  </React.StrictMode>,
)
