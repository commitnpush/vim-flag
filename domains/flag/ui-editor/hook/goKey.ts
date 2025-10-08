import { GO_KEYS } from '@/domains/flag/ui-editor/constants'
import type { GoKey, Point } from '@/domains/flag/ui-editor/types'
import type { Setter } from '@/domains/shared/types'

export const isGoKey = (key: string) => {
  return GO_KEYS.some((e) => e === key)
}

type HandleGoKeyArgs = {
  key: GoKey
  count: number | null
  maxRow: number
  setPoint: Setter<Point>
}
export const handleGoKey = ({
  key,
  count,
  maxRow,
  setPoint,
}: HandleGoKeyArgs) => {
  switch (key) {
    case 'G': {
      setPoint({
        col: 0,
        row: count !== null && count >= 1 ? count - 1 : maxRow,
      })
      break
    }
    case 'g': {
    }
  }
}
