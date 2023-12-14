import MonacoEditor from '@monaco-editor/react'
import { useState } from 'react'

const Editor = () => {
  const [value, setValue] = useState<string>('test')

  return (
    <MonacoEditor
      height="1000px"
      language="javascript"
      theme="vs-dark"
      value={value}
      onChange={(value) => setValue(value || '')}
    />
  )
}

export default Editor
