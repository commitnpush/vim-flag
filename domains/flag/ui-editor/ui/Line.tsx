import { PropsWithChildren } from 'react'

export const Line = ({ children, row }: PropsWithChildren<{ row: number }>) => {
  return <div className="flex">{children}</div>
}
