'use client'

import { Editor } from '@/domains/flag/ui-editor'

const CatchFlagPage = () => {
  const content = `  console.log("hello"world)
const a = 10;
window.alert("WARNING!!!")`
  return (
    <div className="flex h-screen flex-col items-center">
      <p className="w-fit">Catch the flag</p>
      <Editor content={content} />
    </div>
  )
}

export default CatchFlagPage
