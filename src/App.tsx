import React, { useState } from 'react'
import { Panel, Group, Separator } from 'react-resizable-panels'
import Header from './components/Header'
import ProblemPanel from './components/ProblemPanel'
import EditorPanel from './components/EditorPanel'
import TestResultsPanel from './components/TestResultsPanel'
import { useProblem } from './hooks/useProblem'
import { SUPPORTED_LANGUAGES } from './constants'
import { ExecutionResult } from './types'

const App: React.FC = () => {
  const { currentProblem } = useProblem()
  const [selectedLanguageId, setSelectedLanguageId] = useState(105) // Default to C++
  const [sourceCode, setSourceCode] = useState(SUPPORTED_LANGUAGES[0].defaultCode)
  const [executionResult, setExecutionResult] = useState<ExecutionResult | null>(null)

  const handleLanguageChange = (id: number) => {
    setSelectedLanguageId(id)
    const lang = SUPPORTED_LANGUAGES.find(l => l.id === id)
    if (lang) {
      setSourceCode(lang.defaultCode)
    }
  }

  const handleRun = () => {
    console.log('Running code:', sourceCode)
    // Simulate execution for now
    setExecutionResult({
      status: { id: 3, description: 'Accepted' },
      time: '0.045',
      stdout: 'Hello World\n'
    })
  }

  const handleSubmit = () => {
    console.log('Submitting code:', sourceCode)
    // Simulate submission
    setExecutionResult({
      status: { id: 3, description: 'Accepted' },
      time: '0.042',
      stdout: '[0,1]\n'
    })
  }

  const handleToggleTheme = () => {
    const themeBtn = document.getElementById('procode-theme-toggle-btn')
    if (themeBtn) themeBtn.click()
  }

  const handleSettingsClick = () => {
    window.location.href = 'settings.html'
  }

  const handleAppsClick = () => {
    window.location.href = 'apps.html'
  }

  const handleProblemListClick = () => {
    const drawer = document.getElementById('procode-problem-list-drawer')
    if (drawer) {
      drawer.classList.toggle('open')
    }
  }

  return (
    <div className="procode-app" style={{ height: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#0f0f0f' }}>
      <Header
        onRun={handleRun}
        onSubmit={handleSubmit}
        onToggleTheme={handleToggleTheme}
        onSettingsClick={handleSettingsClick}
        onAppsClick={handleAppsClick}
        onProblemListClick={handleProblemListClick}
      />

      <main style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
        <div className="desktop-layout" style={{ height: '100%' }}>
          <Group orientation="horizontal">
            <Panel defaultSize={30} minSize={20}>
              <ProblemPanel problem={currentProblem} />
            </Panel>

            <Separator className="resize-handle-h" />

            <Panel defaultSize={70}>
              <Group orientation="vertical">
                <Panel defaultSize={70} minSize={30}>
                  <EditorPanel
                    code={sourceCode}
                    onChange={(value) => setSourceCode(value || '')}
                    selectedLanguageId={selectedLanguageId}
                    onLanguageChange={handleLanguageChange}
                  />
                </Panel>

                <Separator className="resize-handle-v" />

                <Panel defaultSize={30} minSize={20}>
                  <TestResultsPanel result={executionResult} />
                </Panel>
              </Group>
            </Panel>
          </Group>
        </div>
      </main>

      <div className="procode-showCopyright" style={{ height: '25px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', color: '#666', borderTop: '1px solid #222' }}>
        © 2016-2026 ProCode – All Rights Reserved.
      </div>
    </div>
  )
}

export default App
