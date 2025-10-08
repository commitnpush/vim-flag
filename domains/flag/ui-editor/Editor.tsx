'use client'

import { useMemo } from 'react'
import { useVimEventListener } from '@/domains/flag/ui-editor/hook/useVimEventListener'
import {
  useContent,
  useMaxCol,
  usePoint,
} from '@/domains/flag/ui-editor/store/edtorStore'
import type { SingleChar } from '@/domains/shared/types'
import { Char } from './ui'
import { Line } from './ui/Line'

type EditorProps = {
  content: string
}
export const Editor = ({ content }: EditorProps) => {
  const { point } = usePoint()
  const maxCol = useMaxCol()
  useContent(content)

  const pointerRow = point.row
  const pointerCol = Math.min(point.col, maxCol)

  const contentArray = useMemo(() => {
    return content.split('\n').map((l) => l.split('') as SingleChar[])
  }, [content])
  useVimEventListener()
  return (
    <div>
      {contentArray.map((line, row) => (
        <Line key={row}>
          {line.map((char, col) => (
            <Char
              key={col}
              content={char}
              active={pointerRow === row && pointerCol === col}
            />
          ))}
        </Line>
      ))}
    </div>
  )
}
