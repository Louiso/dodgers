import React from 'react';
import ReactDOM from 'react-dom';
import {
  ThemeProvider, createTheme,
} from '@mui/material/styles';
import { SnackbarProvider } from 'notistack';
import { SWRConfig } from 'swr';
import Root from './routes';
import './index.css';

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
          <Root />
        </SWRConfig>
        {/* </ApolloProvider> */}
      </SnackbarProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
