import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { SnackbarProvider } from 'notistack';
import { Provider } from 'react-redux';
import { store } from './store';
import Root from './routes';
// import { ApolloProvider } from '@apollo/client';
// import client from './apollo/client';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={createTheme()}>
      <SnackbarProvider maxSnack={3}>
        {/* <ApolloProvider client={client}> */}
        <Provider store={store}>
          <Root />
        </Provider>
        {/* </ApolloProvider> */}
      </SnackbarProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
