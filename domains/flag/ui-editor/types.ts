import type { ARROW_KEYS, GO_KEYS } from '@/domains/flag/ui-editor/constants'

export type ArrowKey = (typeof ARROW_KEYS)[number]

export type GoKey = (typeof GO_KEYS)[number]

export type Point = {
  row: number
  col: number
}
