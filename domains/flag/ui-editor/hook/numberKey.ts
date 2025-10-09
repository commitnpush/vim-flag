import type { KeyHandlerContext } from '@/domains/flag/ui-editor/hook/useKeyHandlerContext'

export const isNumberKey = (key: string) => {
  return /^\d$/.test(key)
}

export const handleNumberKey = (key: string, { append }: KeyHandlerContext) => {
  append(key)
}
