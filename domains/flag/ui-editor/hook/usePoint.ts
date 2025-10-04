import { useState } from 'react'

export type Point = {
  row: number
  col: number
}
export const usePoint = () => {
  const [point, setPoint] = useState<Point>({
    row: 0,
    col: 0,
  })

  return {
    point,
  }
}
