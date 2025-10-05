'use client'

import { Editor } from '@/domains/flag/ui-editor'
import { PointerProvider } from '@/domains/flag/ui-editor/store/PointerContext'

const CatchFlagPage = () => {
  const content = `  console.log("hello"world)
const a = 10;
window.alert("WARNING!!!")`
  return (
    <div className="flex h-screen flex-col items-center">
      <p className="w-fit">Catch the flag</p>
      <PointerProvider content={content}>
        <Editor />
      </PointerProvider>
    </div>
  )
}

export default CatchFlagPage
