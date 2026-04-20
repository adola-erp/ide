import React from 'react'
import { ExecutionResult } from '../types'

interface TestResultsPanelProps {
  result: ExecutionResult | null
}

const TestResultsPanel: React.FC<TestResultsPanelProps> = ({ result }) => {
  return (
    <div style={{ height: '100%', padding: '15px', backgroundColor: '#1a1a1a', borderTop: '1px solid #222', overflowY: 'auto' }}>
      <div className="ui secondary pointing inverted menu" style={{ border: 'none', marginBottom: '15px' }}>
        <a className="active item">Testcase</a>
        <a className="item">Result</a>
      </div>

      {!result ? (
        <div style={{ color: '#ccc' }}>
          <div style={{ marginBottom: '10px' }}>Input:</div>
          <div style={{ backgroundColor: '#252525', padding: '10px', borderRadius: '5px', fontFamily: 'monospace' }}>nums = [2,7,11,15], target = 9</div>
        </div>
      ) : (
        <div style={{ color: '#fff' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
            <span style={{
              color: result.status.id === 3 ? '#2cbb5d' : '#ef4743',
              fontWeight: 'bold',
              fontSize: '1.2rem'
            }}>
              {result.status.description}
            </span>
            {result.time && <span style={{ color: '#aaa', fontSize: '0.9rem' }}>Runtime: {result.time} s</span>}
          </div>

          {result.stdout && (
            <div style={{ marginBottom: '15px' }}>
              <div style={{ color: '#aaa', marginBottom: '5px', fontSize: '0.9rem' }}>Stdout:</div>
              <pre style={{ backgroundColor: '#252525', padding: '10px', borderRadius: '5px', margin: 0, whiteSpace: 'pre-wrap' }}>{result.stdout}</pre>
            </div>
          )}

          {result.compile_output && (
            <div style={{ marginBottom: '15px' }}>
              <div style={{ color: '#aaa', marginBottom: '5px', fontSize: '0.9rem' }}>Compile Output:</div>
              <pre style={{ backgroundColor: '#252525', padding: '10px', borderRadius: '5px', margin: 0, color: '#ef4743' }}>{result.compile_output}</pre>
            </div>
          )}

          {result.stderr && (
            <div style={{ marginBottom: '15px' }}>
              <div style={{ color: '#aaa', marginBottom: '5px', fontSize: '0.9rem' }}>Stderr:</div>
              <pre style={{ backgroundColor: '#252525', padding: '10px', borderRadius: '5px', margin: 0, color: '#ef4743' }}>{result.stderr}</pre>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default TestResultsPanel
