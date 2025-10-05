import { useCallback, useEffect } from 'react'
import { usePointerContext } from '@/domains/flag/ui-editor/hook/usePointerContext'

export const useVimEventListener = () => {
  const { maxCol, maxRow, setPoint } = usePointerContext()
  const vimEventListener = useCallback(
    (event: KeyboardEvent) => {
      console.log(event.key)
      switch (event.key) {
        case 'h':
          setPoint((prev) => ({
            ...prev,
            col: prev.col > maxCol ? maxCol - 1 : Math.max(0, prev.col - 1),
          }))
          break
        case 'j':
          setPoint((prev) => ({
            ...prev,
            row: Math.min(maxRow, prev.row + 1),
          }))
          break
        case 'k':
          setPoint((prev) => ({ ...prev, row: Math.max(0, prev.row - 1) }))
          break
        case 'l':
          setPoint((prev) => ({
            ...prev,
            col: prev.col > maxCol ? prev.col : Math.min(maxCol, prev.col + 1),
          }))
      }
    },
    [setPoint, maxCol, maxRow],
  )

  useEffect(() => {
    window.addEventListener('keydown', vimEventListener)

    return () => {
      window.removeEventListener('keydown', vimEventListener)
    }
  }, [vimEventListener])
}
