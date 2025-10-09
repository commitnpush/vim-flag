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
import { useKeyHandlerContext } from '@/domains/flag/ui-editor/hook/useKeyHandlerContext'

export const useVimEventListener = () => {
  const ctx = useKeyHandlerContext()
  const vimEventListener = useCallback(
    (event: KeyboardEvent) => {
      const { key } = event
      if (isNumberKey(event.key)) {
        handleNumberKey(key, ctx)
        return
      }

      if (isArrowKey(event.key)) {
        return handleArrowKey(key, ctx)
      }

      if (isGoKey(event.key)) {
        return handleGoKey(key, ctx)
      }
    },
    [ctx],
  )

  useEffect(() => {
    window.addEventListener('keydown', vimEventListener)

    return () => {
      window.removeEventListener('keydown', vimEventListener)
    }
  }, [vimEventListener])
}
