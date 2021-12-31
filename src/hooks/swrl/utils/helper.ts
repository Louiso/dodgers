// eslint-disable-next-line @typescript-eslint/no-empty-function
export const noop = () => {}

// Using noop() as the undefined value as undefined can possibly be replaced
// by something else.  Prettier ignore and extra parentheses are necessary here
// to ensure that tsc doesn't remove the __NOINLINE__ comment.
// prettier-ignore
export const UNDEFINED: undefined = (/* #__NOINLINE__ */ noop()) as undefined

export const OBJECT = Object

export const isUndefined = (v: any): v is undefined => v === UNDEFINED
// eslint-disable-next-line @typescript-eslint/ban-types
export const isFunction = (v: any): v is Function => typeof v === 'function'
export const mergeObjects = (a: any, b: any) => ({
  ...a, ...b,
})

const STR_UNDEFINED = 'undefined'

// NOTE: Use function to guarantee it's re-evaluated between jsdom and node runtime for tests.
export const hasWindow = () => typeof window !== STR_UNDEFINED
export const hasDocument = () => typeof document !== STR_UNDEFINED
export const hasRequestAnimationFrame = () => hasWindow() && typeof window.requestAnimationFrame !== STR_UNDEFINED
