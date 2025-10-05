'use client'

import { useMemo } from 'react'
import { usePointerContext } from '@/domains/flag/ui-editor/hook/usePointerContext'
import { useVimEventListener } from '@/domains/flag/ui-editor/hook/useVimEventListener'
import type { SingleChar } from '@/domains/shared/types'
import { Char } from './ui'
import { Line } from './ui/Line'

export const Editor = () => {
  const { point, maxCol, content } = usePointerContext()
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
