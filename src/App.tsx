import React, { useState, useCallback } from 'react'
import { Panel, Group, Separator } from 'react-resizable-panels'
import Header from './components/Header'
import ProblemPanel from './components/ProblemPanel'
import EditorPanel from './components/EditorPanel'
import TestResultsPanel from './components/TestResultsPanel'
import { useProblem } from './hooks/useProblem'
import { SUPPORTED_LANGUAGES } from './constants'
import { ExecutionResult } from './types'

const CE_BASE_URL = "https://ce.judge0.com";

const encode = (str: string) => {
  return btoa(unescape(encodeURIComponent(str || "")));
};

const decode = (bytes: string) => {
  const escaped = escape(atob(bytes || ""));
  try {
    return decodeURIComponent(escaped);
  } catch {
    return unescape(escaped);
  }
};

const App: React.FC = () => {
  const { currentProblem } = useProblem()
  const [selectedLanguageId, setSelectedLanguageId] = useState(105) // Default to C++
  const [sourceCode, setSourceCode] = useState(SUPPORTED_LANGUAGES[0].defaultCode)
  const [executionResult, setExecutionResult] = useState<ExecutionResult | null>(null)
  const [isRunning, setIsRunning] = useState(false)

  const handleLanguageChange = (id: number) => {
    setSelectedLanguageId(id)
    const lang = SUPPORTED_LANGUAGES.find(l => l.id === id)
    if (lang) {
      setSourceCode(lang.defaultCode)
    }
  }

  const fetchSubmission = useCallback(async (token: string, iteration = 1): Promise<void> => {
    if (iteration >= 100) {
      setExecutionResult({
        status: { id: 5, description: 'Time Limit Exceeded' },
        stderr: 'Maximum number of probe requests reached.'
      });
      setIsRunning(false);
      return;
    }

    try {
      const response = await fetch(`${CE_BASE_URL}/submissions/${token}?base64_encoded=true`);
      const data = await response.json();

      if (data.status.id <= 2) { // In Queue or Processing
        setTimeout(() => fetchSubmission(token, iteration + 1), 1000);
      } else {
        setExecutionResult({
          status: data.status,
          time: data.time,
          memory: data.memory,
          stdout: data.stdout ? decode(data.stdout) : undefined,
          stderr: data.stderr ? decode(data.stderr) : undefined,
          compile_output: data.compile_output ? decode(data.compile_output) : undefined,
        });
        setIsRunning(false);
      }
    } catch (error) {
      console.error('Error fetching submission:', error);
      setExecutionResult({
        status: { id: 13, description: 'Internal Error' },
        stderr: 'Failed to fetch submission results.'
      });
      setIsRunning(false);
    }
  }, []);

  const runCode = async (code: string, languageId: number, stdin: string = "") => {
    setIsRunning(true);
    setExecutionResult(null);

    try {
      const response = await fetch(`${CE_BASE_URL}/submissions?base64_encoded=true&wait=false`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          source_code: encode(code),
          language_id: languageId,
          stdin: encode(stdin),
          redirect_stderr_to_stdout: false
        }),
      });

      const data = await response.json();
      if (data.token) {
        fetchSubmission(data.token);
      } else {
        throw new Error('No token received');
      }
    } catch (error) {
      console.error('Error running code:', error);
      setExecutionResult({
        status: { id: 13, description: 'Internal Error' },
        stderr: 'Failed to initiate code execution.'
      });
      setIsRunning(false);
    }
  };

  const handleRun = () => {
    // For "Run", we use the first test case input if available
    const stdin = currentProblem.testcases[0]?.input || "";
    runCode(sourceCode, selectedLanguageId, stdin);
  }

  const handleSubmit = () => {
    // For "Submit", in a real app we'd run all test cases.
    // Here we'll just run with the first one but mark it as a submission.
    const stdin = currentProblem.testcases[0]?.input || "";
    runCode(sourceCode, selectedLanguageId, stdin);
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
        isRunning={isRunning}
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
                  <TestResultsPanel result={executionResult} isRunning={isRunning} problem={currentProblem} />
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
