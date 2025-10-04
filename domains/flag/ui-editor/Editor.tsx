'use client'

import { useMemo } from 'react'
import { Char } from './ui'
import { SingleChar } from '@/domains/shared/types'
import { Line } from './ui/Line'
import { usePoint } from './hook/usePoint'
import { useVimEventListener } from './hook/useVimEventListener'

type EditorProps = {
  content: string
}
export const Editor = ({ content }: EditorProps) => {
  const { point } = usePoint()
  const contentArray = useMemo(() => {
    return content.split('\n').map((l) => l.split('') as SingleChar[])
  }, [content])
  useVimEventListener()
  return (
    <div>
      {contentArray.map((line, row) => (
        <Line key={row} row={row}>
          {line.map((char, col) => (
            <Char
              key={col}
              content={char}
              col={col}
              active={point.row === row && point.col === col}
            />
          ))}
        </Line>
      ))}
    </div>
  )
}
