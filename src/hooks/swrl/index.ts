// useSWR
import useSWR from './use-swr'

export default useSWR

// Core APIs
export {
  // eslint-disable-next-line camelcase
  SWRConfig, unstable_serialize,
} from './use-swr'
export { useSWRConfig } from './utils/use-swr-config'
export { mutate } from './utils/config'

// Types
export type {
  SWRConfiguration,
  Revalidator,
  RevalidatorOptions,
  Key,
  KeyLoader,
  KeyedMutator,
  SWRResponse,
  Cache,
  SWRHook,
  BareFetcher,
  Fetcher,
  MutatorCallback,
  MutatorOptions,
  Middleware,
  Arguments,
} from './types'
