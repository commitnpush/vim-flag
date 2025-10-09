export const isNumberKey = (key: string) => {
  return /^\d$/.test(key)
}

type HandleNumberKyeArgs = {
  key: string
  append: (key: string) => void
}

export const handleNumberKey = ({ key, append }: HandleNumberKyeArgs) => {
  append(key)
}
