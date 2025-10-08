import { useCallback, useEffect } from 'react'
import {
  handleArrowKey,
  isArrowKey,
} from '@/domains/flag/ui-editor/hook/arrowKey'
import { handleGoKey, isGoKey } from '@/domains/flag/ui-editor/hook/goKey'
import {
  useCount,
  useMaxCol,
  useMaxRow,
  usePoint,
} from '@/domains/flag/ui-editor/store/edtorStore'

export const useVimEventListener = () => {
  const { setPoint } = usePoint()
  const { count, setCount } = useCount()
  const maxRow = useMaxRow()
  const maxCol = useMaxCol()
  const vimEventListener = useCallback(
    (event: KeyboardEvent) => {
      if (/^\d$/.test(event.key)) {
        setCount(Number(event.key))
        return
      }

      if (isArrowKey(event.key)) {
        return handleArrowKey({
          key: event.key,
          count,
          maxCol,
          maxRow,
          setPoint,
        })
      }

      if (isGoKey(event.key)) {
        return handleGoKey({
          key: event.key,
          count,
          maxRow,
          setPoint,
        })
      }
    },
    [setPoint, count, maxCol, maxRow],
  )

  useEffect(() => {
    window.addEventListener('keydown', vimEventListener)

    return () => {
      window.removeEventListener('keydown', vimEventListener)
    }
  }, [vimEventListener])
}
