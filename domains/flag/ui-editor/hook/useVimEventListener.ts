import { KeyboardEventHandler, useEffect } from 'react'

const vimEventListener = (event: KeyboardEvent) => {
  console.log(event.key)
}
export const useVimEventListener = () => {
  useEffect(() => {
    window.addEventListener('keydown', vimEventListener)

    return () => {
      window.removeEventListener('keydown', vimEventListener)
    }
  }, [])
}
