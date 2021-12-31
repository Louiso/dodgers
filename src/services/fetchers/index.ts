import Axios, {
  AxiosInstance, Method,
} from 'axios';
import { GraphQLClient } from 'graphql-request';

const {
  VITE_APP_DEFAULT_API_SERVER_BASE_URL = 'http://localhost:4000/api',
  VITE_APP_DEFAULT_GRAPHQL_SERVER_BASE_URL = 'http://localhost:4000/graphql',
} = import.meta.env;

interface ApiFetcher {
  url: string;
  method?: Method;
  headers?: any;
}

interface GraphqlFetcher<T> {
  query: string;
  variables?: T;
  headers?: any;
}

const getHeaders = () => ({
  'Content-Type': 'application/json',
  Authorization: `Bearer ${localStorage.getItem('token')}`,
});

// INSTANCES

const serverApiInstance = Axios.create({ baseURL: VITE_APP_DEFAULT_API_SERVER_BASE_URL });

const clientGraphqlInstance = new GraphQLClient(VITE_APP_DEFAULT_GRAPHQL_SERVER_BASE_URL, { headers: getHeaders() });

// FETCHERS

function createApiFetcher<T>(instance: AxiosInstance) {
  return ({
    url, method, headers,
  }: ApiFetcher): Promise<T> => instance({
    url,
    method,
    headers: {
      ...getHeaders(),
      ...headers,
    },
  }).then((response) => response.data);
}

export function defaultApiFetcher<T>(args: ApiFetcher) {
  return createApiFetcher<T>(serverApiInstance)(args);
}

export async function defaultGraphqlFetcher<T, K>({
  query, variables, headers,
}: GraphqlFetcher<K>): Promise<T> {
  return clientGraphqlInstance.request(
    query,
    variables,
    {
      ...getHeaders(),
      ...headers,
    },
  );
}
