import React, { useState } from 'react'
import { Panel, Group, Separator } from 'react-resizable-panels'
import Header from './components/Header'
import ProblemPanel from './components/ProblemPanel'
import EditorPanel from './components/EditorPanel'
import TestResultsPanel from './components/TestResultsPanel'
import { useProblem } from './hooks/useProblem'

const App: React.FC = () => {
  const { currentProblem } = useProblem()
  const [sourceCode, setSourceCode] = useState('#include <iostream>\n\nint main() {\n    std::cout << "Hello World";\n    return 0;\n}')

  const handleRun = () => {
    console.log('Running code:', sourceCode)
  }

  const handleSubmit = () => {
    console.log('Submitting code:', sourceCode)
  }

  return (
    <div className="procode-app" style={{ height: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#0f0f0f' }}>
      <Header onRun={handleRun} onSubmit={handleSubmit} />

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
                  <EditorPanel code={sourceCode} onChange={(value) => setSourceCode(value || '')} />
                </Panel>

                <Separator className="resize-handle-v" />

                <Panel defaultSize={30} minSize={20}>
                  <TestResultsPanel />
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
