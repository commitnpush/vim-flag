import { ARROW_KEYS } from '@/domains/flag/ui-editor/constants'
import type { KeyHandlerContext } from '@/domains/flag/ui-editor/hook/useKeyHandlerContext'
import type { ArrowKey } from '../types'
export const isArrowKey = (key: string): key is ArrowKey => {
  return ARROW_KEYS.some((e) => e === key)
}

export const handleArrowKey = (
  key: string,
  { maxCol, maxRow, setPoint, buffer, flush }: KeyHandlerContext,
) => {
  const count = Number(buffer) || 1
  switch (key) {
    case 'h':
      setPoint((prev) => ({
        ...prev,
        col: prev.col > maxCol ? maxCol - 1 : Math.max(0, prev.col - count),
      }))
      break
    case 'j':
      setPoint((prev) => ({
        ...prev,
        row: Math.min(maxRow, prev.row + count),
      }))
      break
    case 'k':
      setPoint((prev) => ({ ...prev, row: Math.max(0, prev.row - count) }))
      break
    case 'l':
      setPoint((prev) => ({
        ...prev,
        col: prev.col > maxCol ? prev.col : Math.min(maxCol, prev.col + count),
      }))
  }
  flush()
}
