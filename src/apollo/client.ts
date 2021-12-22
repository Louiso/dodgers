import {
  ApolloClient,
  InMemoryCache,
} from '@apollo/client';

const client = new ApolloClient({
  uri: import.meta.env.VITE_APP_SERVER,
  cache: new InMemoryCache(),
});

declare global {
  interface Window { client: any; }
}

if (import.meta.env.VITE_NODE_ENV === 'development') {
  window.client = client;
}

export default client;
