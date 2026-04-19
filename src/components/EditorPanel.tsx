import React from 'react'
import Editor from '@monaco-editor/react'

interface EditorPanelProps {
  code: string
  onChange: (value: string | undefined) => void
}

const EditorPanel: React.FC<EditorPanelProps> = ({ code, onChange }) => {
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div style={{ height: '40px', backgroundColor: '#252525', display: 'flex', alignItems: 'center', padding: '0 10px', borderBottom: '1px solid #111' }}>
        <span style={{ fontSize: '0.8rem', color: '#aaa' }}>C++ (GCC 14.1.0)</span>
      </div>
      <div style={{ flex: 1 }}>
        <Editor
          height="100%"
          defaultLanguage="cpp"
          value={code}
          onChange={onChange}
          theme="vs-dark"
          options={{
            minimap: { enabled: false },
            fontSize: 14,
            automaticLayout: true,
            scrollBeyondLastLine: false,
          }}
        />
      </div>
    </div>
  )
}

export default EditorPanel
