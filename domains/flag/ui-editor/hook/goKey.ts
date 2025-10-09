import { GO_KEYS } from '@/domains/flag/ui-editor/constants'
import type { KeyHandlerContext } from '@/domains/flag/ui-editor/hook/useKeyHandlerContext'

export const isGoKey = (key: string) => {
  return GO_KEYS.some((e) => e === key)
}

export const handleGoKey = (
  key: string,
  { maxRow, setPoint, buffer, append, flush }: KeyHandlerContext,
) => {
  switch (key) {
    case 'G': {
      const count = Number(buffer)
      setPoint({
        col: 0,
        row: count !== null && count >= 1 ? count - 1 : maxRow,
      })
      flush()
      break
    }
    case 'g': {
      if (!buffer) {
        append('g')
      } else if (buffer === 'g') {
        flush()
        setPoint({
          col: 0,
          row: 0,
        })
      }
    }
  }
}
