import { Editor } from '@/domains/flag/ui-editor'

const CatchFlagPage = () => {
  return (
    <div className="flex h-screen flex-col items-center">
      <p className="w-fit">Catch the flag</p>
      <Editor content={'console.log("hello"world)'} />
    </div>
  )
}

export default CatchFlagPage
