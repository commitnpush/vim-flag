import { GO_KEYS } from '@/domains/flag/ui-editor/constants'
import type { GoKey, Point } from '@/domains/flag/ui-editor/types'
import type { Setter } from '@/domains/shared/types'

export const isGoKey = (key: string) => {
  return GO_KEYS.some((e) => e === key)
}

type HandleGoKeyArgs = {
  key: GoKey
  maxRow: number
  setPoint: Setter<Point>
  buffer: string | null
  append: (key: string) => void
  flush: () => void
}
export const handleGoKey = ({
  key,
  maxRow,
  setPoint,
  buffer,
  append,
  flush,
}: HandleGoKeyArgs) => {
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
