import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { ApolloProvider } from '@apollo/client';
import { SnackbarProvider } from 'notistack';
import Root from './routes';
import client from './apollo/client';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={createTheme()}>
      <SnackbarProvider maxSnack={3}>
        <ApolloProvider client={client}>
          <Root />
        </ApolloProvider>
      </SnackbarProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
