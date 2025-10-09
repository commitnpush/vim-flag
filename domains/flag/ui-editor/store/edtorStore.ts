import { useEffect } from 'react'
import { create } from 'zustand/react'
import { useShallow } from 'zustand/react/shallow'
import type { Point } from '@/domains/flag/ui-editor/types'
import type { Setter } from '@/domains/shared/types'

type State = {
  content: string
  contentArray: string[]
  point: Point
  buffer: string
}

type Action = {
  setContent: Setter<string>
  setPoint: Setter<Point>
  append: (key: string) => void
  flush: () => void
}

const useEditorStore = create<State & Action>((set, get) => {
  return {
    content: '',
    contentArray: [],
    setContent: (content) => {
      const newContent =
        typeof content === 'function' ? content(get().content) : content
      set({
        content: newContent,
        contentArray: newContent.split('\n'),
      })
    },
    point: {
      row: 0,
      col: 0,
    },
    setPoint: (point) => {
      const newPoint = typeof point === 'function' ? point(get().point) : point
      set({ point: newPoint })
    },
    buffer: '',
    append: (key: string) => {
      set({ buffer: get().buffer + key })
    },
    flush: () => {
      set({ buffer: '' })
    },
  }
})

export const useContent = (initialContent?: string) => {
  const { content, setContent } = useEditorStore(
    useShallow(({ content, setContent }) => ({
      content,
      setContent,
    })),
  )
  useEffect(() => {
    if (!initialContent || initialContent === content) return
    setContent(initialContent)
  }, [initialContent, setContent])
  return { content, setContent }
}

export const useMaxRow = () =>
  useEditorStore((state) => state.contentArray.length - 1)

export const useMaxCol = () =>
  useEditorStore((state) => {
    const { contentArray, point } = state
    return (contentArray[point.row]?.length ?? 1) - 1
  })
export const usePoint = () => {
  const { point, setPoint } = useEditorStore(
    useShallow(({ point, setPoint }) => ({
      point,
      setPoint,
    })),
  )
  return {
    point,
    setPoint,
  }
}
export const useBuffer = () =>
  useEditorStore(
    useShallow(({ buffer, append, flush }) => ({ buffer, append, flush })),
  )
