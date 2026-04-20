import React, { useState, useEffect } from 'react'
import { ExecutionResult, Problem } from '../types'
import { Loader2 } from 'lucide-react'

interface TestResultsPanelProps {
  result: ExecutionResult | null
  isRunning?: boolean
  problem: Problem
}

const TestResultsPanel: React.FC<TestResultsPanelProps> = ({ result, isRunning = false, problem }) => {
  const [activeTab, setActiveTab] = useState<'testcase' | 'result'>('testcase')

  useEffect(() => {
    if (isRunning) {
      setActiveTab('result')
    } else if (result) {
      setActiveTab('result')
    }
  }, [isRunning, result])

  const testcase = problem.testcases[0] || { input: "", expected: "" };

  return (
    <div style={{ height: '100%', padding: '15px', backgroundColor: '#1a1a1a', borderTop: '1px solid #222', overflowY: 'auto' }}>
      <div className="ui secondary pointing inverted menu" style={{ border: 'none', marginBottom: '15px' }}>
        <a
          className={`${activeTab === 'testcase' ? 'active' : ''} item`}
          onClick={() => setActiveTab('testcase')}
          style={{ cursor: 'pointer' }}
        >
          Testcase
        </a>
        <a
          className={`${activeTab === 'result' ? 'active' : ''} item`}
          onClick={() => setActiveTab('result')}
          style={{ cursor: 'pointer' }}
        >
          Result
        </a>
      </div>

      {activeTab === 'testcase' ? (
        <div style={{ color: '#ccc' }}>
          <div style={{ marginBottom: '15px' }}>
            <div style={{ color: '#aaa', marginBottom: '5px', fontSize: '0.9rem' }}>Input:</div>
            <pre style={{ backgroundColor: '#252525', padding: '10px', borderRadius: '5px', margin: 0, whiteSpace: 'pre-wrap', fontFamily: 'JetBrains Mono, monospace' }}>
              {testcase.input}
            </pre>
          </div>
          <div style={{ marginBottom: '15px' }}>
            <div style={{ color: '#aaa', marginBottom: '5px', fontSize: '0.9rem' }}>Expected Output:</div>
            <pre style={{ backgroundColor: '#252525', padding: '10px', borderRadius: '5px', margin: 0, whiteSpace: 'pre-wrap', fontFamily: 'JetBrains Mono, monospace' }}>
              {testcase.expected}
            </pre>
          </div>
        </div>
      ) : (
        <div style={{ color: '#fff' }}>
          {isRunning ? (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '150px', gap: '10px' }}>
              <Loader2 className="animate-spin" size={32} />
              <div style={{ color: '#aaa' }}>Executing code...</div>
            </div>
          ) : !result ? (
            <div style={{ color: '#aaa', textAlign: 'center', marginTop: '40px' }}>
              Run your code to see the results here.
            </div>
          ) : (
            <>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                <span style={{
                  color: result.status.id === 3 ? '#2cbb5d' : '#ef4743',
                  fontWeight: 'bold',
                  fontSize: '1.2rem'
                }}>
                  {result.status.description}
                </span>
                <div style={{ display: 'flex', gap: '10px' }}>
                   {result.time && <span style={{ color: '#aaa', fontSize: '0.85rem', backgroundColor: '#252525', padding: '2px 8px', borderRadius: '4px' }}>Runtime: {Math.round(parseFloat(result.time) * 1000)} ms</span>}
                   {result.memory && <span style={{ color: '#aaa', fontSize: '0.85rem', backgroundColor: '#252525', padding: '2px 8px', borderRadius: '4px' }}>Memory: {result.memory} KB</span>}
                </div>
              </div>

              {result.stdout && (
                <div style={{ marginBottom: '15px' }}>
                  <div style={{ color: '#aaa', marginBottom: '5px', fontSize: '0.9rem' }}>Stdout:</div>
                  <pre style={{ backgroundColor: '#252525', padding: '10px', borderRadius: '5px', margin: 0, whiteSpace: 'pre-wrap', fontFamily: 'JetBrains Mono, monospace' }}>{result.stdout}</pre>
                </div>
              )}

              {result.compile_output && (
                <div style={{ marginBottom: '15px' }}>
                  <div style={{ color: '#aaa', marginBottom: '5px', fontSize: '0.9rem' }}>Compile Output:</div>
                  <pre style={{ backgroundColor: '#252525', padding: '10px', borderRadius: '5px', margin: 0, color: '#ef4743', fontFamily: 'JetBrains Mono, monospace', whiteSpace: 'pre-wrap' }}>{result.compile_output}</pre>
                </div>
              )}

              {result.stderr && (
                <div style={{ marginBottom: '15px' }}>
                  <div style={{ color: '#aaa', marginBottom: '5px', fontSize: '0.9rem' }}>Stderr:</div>
                  <pre style={{ backgroundColor: '#252525', padding: '10px', borderRadius: '5px', margin: 0, color: '#ef4743', fontFamily: 'JetBrains Mono, monospace', whiteSpace: 'pre-wrap' }}>{result.stderr}</pre>
                </div>
              )}

              {result.status.id === 3 && result.stdout && testcase.expected && (
                <div style={{ marginTop: '10px', padding: '10px', borderRadius: '5px', backgroundColor: result.stdout.trim() === testcase.expected.trim() ? 'rgba(44, 187, 93, 0.1)' : 'rgba(239, 71, 67, 0.1)', border: `1px solid ${result.stdout.trim() === testcase.expected.trim() ? '#2cbb5d' : '#ef4743'}` }}>
                   {result.stdout.trim() === testcase.expected.trim() ? "Test Passed!" : "Test Failed: Output does not match expected."}
                </div>
              )}
            </>
          )}
        </div>
      )}
    </div>
  )
}

export default TestResultsPanel
