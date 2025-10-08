import { useEffect } from 'react'
import { create } from 'zustand/react'
import { useShallow } from 'zustand/react/shallow'
import type { Point } from '@/domains/flag/ui-editor/types'
import type { Setter } from '@/domains/shared/types'

type State = {
  content: string
  contentArray: string[]
  count: number | null
  point: Point
}

type Action = {
  setContent: Setter<string>
  setCount: Setter<number | null>
  setPoint: Setter<Point>
}

const useEditorStore = create<State & Action>((set, get) => {
  return {
    content: '',
    contentArray: [],
    count: null,
    point: {
      row: 0,
      col: 0,
    },
    setContent: (content) => {
      const newContent =
        typeof content === 'function' ? content(get().content) : content
      set({
        content: newContent,
        contentArray: newContent.split('\n'),
      })
    },
    setCount: (count) => {
      const newCount = typeof count === 'function' ? count(get().count) : count
      console.log(newCount)
      set({ count: newCount })
    },
    setPoint: (point) => {
      const newPoint = typeof point === 'function' ? point(get().point) : point
      set({ point: newPoint, count: null })
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

export const useCount = () =>
  useEditorStore(useShallow(({ count, setCount }) => ({ count, setCount })))

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
