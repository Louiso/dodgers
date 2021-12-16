import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Root from './routes';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={createTheme()}>
      <Root />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
