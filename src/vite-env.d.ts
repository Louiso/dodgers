/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_SERVER: string
  readonly VITE_NODE_ENV: string
  readonly VITE_APP_DEFAULT_API_SERVER_BASE_URL: string
  readonly VITE_APP_DEFAULT_GRAPHQL_SERVER_BASE_URL: string
}
