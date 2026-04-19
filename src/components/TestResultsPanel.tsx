import React from 'react'

const TestResultsPanel: React.FC = () => {
  return (
    <div style={{ height: '100%', padding: '15px', backgroundColor: '#1a1a1a', borderTop: '1px solid #222' }}>
      <div className="ui secondary pointing inverted menu" style={{ border: 'none', marginBottom: '15px' }}>
        <a className="active item">Testcase</a>
        <a className="item">Result</a>
      </div>
      <div style={{ color: '#ccc' }}>
        <div style={{ marginBottom: '10px' }}>Input:</div>
        <div style={{ backgroundColor: '#252525', padding: '10px', borderRadius: '5px', fontFamily: 'monospace' }}>nums = [2,7,11,15], target = 9</div>
      </div>
    </div>
  )
}

export default TestResultsPanel
