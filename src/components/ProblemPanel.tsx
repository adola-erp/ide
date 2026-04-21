import React from 'react'
import { Problem } from '../types'

interface ProblemPanelProps {
  problem: Problem
}

const ProblemPanel: React.FC<ProblemPanelProps> = ({ problem }) => {
  const diffColor = problem.difficulty === 'Easy' ? '#2cbb5d' : problem.difficulty === 'Medium' ? '#ffa116' : '#ef4743';

  return (
    <div style={{ height: '100%', padding: '25px', overflowY: 'auto', backgroundColor: '#1a1a1a', borderRight: '1px solid #222' }}>
      <h1 className="ui header inverted" style={{ fontSize: '1.6rem', marginBottom: '1rem' }}>{problem.id}. {problem.title}</h1>

      <div style={{ display: 'flex', gap: '10px', marginBottom: '2rem' }}>
        <div style={{
          color: diffColor,
          backgroundColor: `${diffColor}15`,
          padding: '4px 12px',
          borderRadius: '15px',
          fontSize: '0.85rem',
          fontWeight: 600
        }}>
          {problem.difficulty}
        </div>
        <div style={{
          color: '#aaa',
          backgroundColor: 'rgba(255,255,255,0.05)',
          padding: '4px 12px',
          borderRadius: '15px',
          fontSize: '0.85rem'
        }}>
          {problem.topics}
        </div>
      </div>

      <div
        className="problem-description"
        style={{ color: '#eff1f6', lineHeight: '1.6', fontSize: '1rem' }}
        dangerouslySetInnerHTML={{ __html: problem.description }}
      />

      {problem.testcases && problem.testcases.length > 0 && (
        <div style={{ marginTop: '3rem' }}>
          <h3 className="ui header inverted" style={{ fontSize: '1.1rem' }}>Example 1:</h3>
          <div style={{ backgroundColor: 'rgba(255,255,255,0.03)', padding: '15px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)' }}>
            <div style={{ marginBottom: '10px' }}>
              <span style={{ color: '#aaa', fontWeight: 600 }}>Input:</span>
              <pre style={{ margin: '5px 0', color: '#fff', fontFamily: 'JetBrains Mono, monospace', whiteSpace: 'pre-wrap' }}>
                {problem.testcases[0].input}
              </pre>
            </div>
            <div>
              <span style={{ color: '#aaa', fontWeight: 600 }}>Output:</span>
              <pre style={{ margin: '5px 0', color: '#fff', fontFamily: 'JetBrains Mono, monospace', whiteSpace: 'pre-wrap' }}>
                {problem.testcases[0].expected}
              </pre>
            </div>
          </div>
        </div>
      )}

      <div style={{ marginTop: '3rem', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '1.5rem' }}>
        <h3 className="ui header inverted" style={{ fontSize: '1rem', color: '#aaa' }}>Constraints:</h3>
        <ul style={{ color: '#aaa', paddingLeft: '1.5rem', fontSize: '0.9rem' }}>
          <li style={{ marginBottom: '5px' }}>Input array length is between 1 and 10,000.</li>
          <li style={{ marginBottom: '5px' }}>Target value fits within a 32-bit signed integer.</li>
        </ul>
      </div>
    </div>
  )
}

export default ProblemPanel
