import { useMemo } from 'react'
import {
  useBuffer,
  useMaxCol,
  useMaxRow,
  usePoint,
} from '@/domains/flag/ui-editor/store/edtorStore'
import type { Point } from '@/domains/flag/ui-editor/types'
import type { Setter } from '@/domains/shared/types'

export type KeyHandlerContext = {
  maxCol: number
  maxRow: number
  setPoint: Setter<Point>
  buffer: string
  append: (key: string) => void
  flush: () => void
}

export const useKeyHandlerContext = (): KeyHandlerContext => {
  const { setPoint } = usePoint()
  const maxRow = useMaxRow()
  const maxCol = useMaxCol()
  const { buffer, append, flush } = useBuffer()

  const context = useMemo(
    () => ({
      maxCol,
      maxRow,
      setPoint,
      buffer,
      append,
      flush,
    }),
    [setPoint, maxCol, maxRow, buffer, append, flush],
  )
  return context
}
