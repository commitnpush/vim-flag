import type { SingleChar } from '@/domains/shared/types'
import { Cursor } from './Cursor'

type CharProps = {
  content: SingleChar
  active: boolean
}
export const Char = ({ content, active }: CharProps) => {
  return (
    <span className="relative flex h-10 w-10 items-center justify-center bg-stone-200 inset-ring">
      <span className="z-20">{content}</span>
      {active && <Cursor />}
    </span>
  )
}
