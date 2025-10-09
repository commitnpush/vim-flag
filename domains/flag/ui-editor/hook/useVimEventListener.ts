import { useCallback, useEffect } from 'react'
import {
  handleArrowKey,
  isArrowKey,
} from '@/domains/flag/ui-editor/hook/arrowKey'
import { handleGoKey, isGoKey } from '@/domains/flag/ui-editor/hook/goKey'
import {
  handleNumberKey,
  isNumberKey,
} from '@/domains/flag/ui-editor/hook/numberKey'
import {
  useBuffer,
  useMaxCol,
  useMaxRow,
  usePoint,
} from '@/domains/flag/ui-editor/store/edtorStore'

export const useVimEventListener = () => {
  const { setPoint } = usePoint()
  const maxRow = useMaxRow()
  const maxCol = useMaxCol()
  const { buffer, append, flush } = useBuffer()
  const vimEventListener = useCallback(
    (event: KeyboardEvent) => {
      if (isNumberKey(event.key)) {
        handleNumberKey({ key: event.key, append })
        return
      }

      if (isArrowKey(event.key)) {
        return handleArrowKey({
          key: event.key,
          maxCol,
          maxRow,
          setPoint,
          buffer,
          flush,
        })
      }

      if (isGoKey(event.key)) {
        return handleGoKey({
          key: event.key,
          maxRow,
          setPoint,
          buffer,
          append,
          flush,
        })
      }
    },
    [setPoint, maxCol, maxRow, buffer],
  )

  useEffect(() => {
    window.addEventListener('keydown', vimEventListener)

    return () => {
      window.removeEventListener('keydown', vimEventListener)
    }
  }, [vimEventListener])
}
