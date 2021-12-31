import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { SnackbarProvider } from 'notistack';
import { Provider } from 'react-redux';
import { SWRConfig } from 'swr';
import { store } from './store';
import Root from './routes';

// import { ApolloProvider } from '@apollo/client';
// import client from './apollo/client';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={createTheme()}>
      <SnackbarProvider maxSnack={3}>
        {/* <ApolloProvider client={client}> */}
        <SWRConfig value={{
          fetcher: (url) => fetch(url).then((res) => res.json()),
          provider: () => new Map(),
        }}
        >
          <Provider store={store}>
            <Root />
          </Provider>
        </SWRConfig>
        {/* </ApolloProvider> */}
      </SnackbarProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
