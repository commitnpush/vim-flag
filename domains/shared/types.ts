export type SingleChar = `${string}` extends `${infer F}${infer Rest}`
  ? Rest extends ""
    ? F
    : never
  : never;
