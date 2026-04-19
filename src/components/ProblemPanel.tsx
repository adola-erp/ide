import React from 'react'
import { Problem } from '../types'

interface ProblemPanelProps {
  problem: Problem
}

const ProblemPanel: React.FC<ProblemPanelProps> = ({ problem }) => {
  const diffColor = problem.difficulty === 'Easy' ? 'green' : problem.difficulty === 'Medium' ? 'yellow' : 'red';

  return (
    <div style={{ height: '100%', padding: '20px', overflowY: 'auto', backgroundColor: '#1a1a1a', borderRight: '1px solid #222' }}>
      <h1 className="ui header inverted" style={{ fontSize: '1.5rem' }}>{problem.id}. {problem.title}</h1>
      <div className="ui labels">
        <div className={`ui ${diffColor} label`}>
          {problem.difficulty}
        </div>
        <div className="ui basic inverted label">{problem.topics}</div>
      </div>
      <div
        style={{ marginTop: '20px', color: '#ccc', lineHeight: '1.6' }}
        dangerouslySetInnerHTML={{ __html: problem.description }}
      />
    </div>
  )
}

export default ProblemPanel
