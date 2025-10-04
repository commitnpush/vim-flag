import { PropsWithChildren } from "react"

const FlagLayout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <header>Header</header>
      <main>{children}</main>
    </div>
  )
}

export default FlagLayout
