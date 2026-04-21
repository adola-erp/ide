import React from 'react'
import Editor from '@monaco-editor/react'
import { SUPPORTED_LANGUAGES } from '../constants'
import LanguageSelector from './LanguageSelector'
import { Settings, Zap } from 'lucide-react'

interface EditorPanelProps {
  code: string
  onChange: (value: string | undefined) => void
  selectedLanguageId: number
  onLanguageChange: (languageId: number) => void
  theme?: 'dark' | 'light'
}

const EditorPanel: React.FC<EditorPanelProps> = ({ code, onChange, selectedLanguageId, onLanguageChange, theme = 'dark' }) => {
  const selectedLanguage = SUPPORTED_LANGUAGES.find(l => l.id === selectedLanguageId) || SUPPORTED_LANGUAGES[0];

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--panel-bg)' }}>
      <div style={{
        height: '40px',
        backgroundColor: 'var(--dark-bg)',
        display: 'flex',
        alignItems: 'center',
        padding: '0 10px',
        borderBottom: '1px solid var(--border-color)',
        justifyContent: 'space-between'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <LanguageSelector
              selectedLanguageId={selectedLanguageId}
              onLanguageChange={onLanguageChange}
            />
            <div style={{ width: '1px', height: '20px', backgroundColor: 'var(--border-color)', margin: '0 5px' }}></div>
            <button style={{ background: 'none', border: 'none', color: '#666', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.8rem' }}>
                <Zap size={14} /> Auto
            </button>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <button title="Settings" style={{ background: 'none', border: 'none', color: '#666', cursor: 'pointer' }}>
                <Settings size={18} />
            </button>
        </div>
      </div>
      <div style={{ flex: 1, position: 'relative' }}>
        <Editor
          height="100%"
          language={selectedLanguage.monacoMode}
          value={code}
          onChange={onChange}
          theme={theme === 'dark' ? 'vs-dark' : 'light'}
          options={{
            minimap: { enabled: false },
            fontSize: 14,
            fontFamily: "'JetBrains Mono', monospace",
            fontLigatures: true,
            automaticLayout: true,
            scrollBeyondLastLine: false,
            padding: { top: 15, bottom: 15 },
            lineNumbers: 'on',
            renderLineHighlight: 'all',
            cursorStyle: 'line',
            cursorBlinking: 'smooth',
            smoothScrolling: true,
            contextmenu: true,
            scrollbar: {
                vertical: 'visible',
                horizontal: 'visible',
                verticalScrollbarSize: 10,
                horizontalScrollbarSize: 10,
                useShadows: false,
            }
          }}
        />
      </div>
    </div>
  )
}

export default EditorPanel
