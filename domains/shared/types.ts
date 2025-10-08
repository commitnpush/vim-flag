export type SingleChar = `${string}` extends `${infer F}${infer Rest}`
  ? Rest extends ''
    ? F
    : never
  : never

export type Setter<T> = (value: T | ((prev: T) => T)) => void
