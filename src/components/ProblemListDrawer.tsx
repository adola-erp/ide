import React, { useState } from 'react'
import { X, Search, Filter } from 'lucide-react'
import { Problem } from '../types'

interface ProblemListDrawerProps {
  isOpen: boolean
  onClose: () => void
  problems: Problem[]
  onSelectProblem: (id: number) => void
  currentProblemId: number
}

const ProblemListDrawer: React.FC<ProblemListDrawerProps> = ({
  isOpen,
  onClose,
  problems,
  onSelectProblem,
  currentProblemId
}) => {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredProblems = problems.filter(p =>
    p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.topics.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className={`problem-list-drawer ${isOpen ? 'open' : ''}`} id="procode-problem-list-drawer">
      <div className="drawer-header">
        <div className="drawer-title">Problems</div>
        <div className="header-right">
          <div className="solved-progress">
             <div className="progress-circle"></div>
             <span>0/{problems.length}</span>
          </div>
          <button className="ui icon button drawer-close" onClick={onClose}>
            <X size={20} />
          </button>
        </div>
      </div>

      <div className="drawer-search-bar">
        <div className="ui left icon input search-input-container">
          <input
            type="text"
            placeholder="Search problems..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search size={16} style={{ position: 'absolute', left: '10px', top: '11px', color: '#666' }} />
        </div>
        <div className="search-actions">
           <button className="ui icon button"><Filter size={18} /></button>
        </div>
      </div>

      <div className="problem-items">
        {filteredProblems.map(p => (
          <div
            key={p.id}
            className={`problem-item ${p.id === currentProblemId ? 'active-problem' : ''}`}
            onClick={() => {
              onSelectProblem(p.id)
              onClose()
            }}
            style={{
               background: p.id === currentProblemId ? 'rgba(255, 161, 22, 0.1)' : 'transparent',
               borderLeft: p.id === currentProblemId ? '3px solid #ffa116' : '3px solid transparent'
            }}
          >
            <div className="problem-info">
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ color: '#aaa', fontSize: '0.9rem' }}>{p.id}.</span>
                <span style={{ color: 'white', fontWeight: 500 }}>{p.title}</span>
              </div>
              <div style={{ fontSize: '0.8rem', color: '#666', marginTop: '4px', marginLeft: '25px' }}>
                {p.topics}
              </div>
            </div>
            <div style={{
              color: p.difficulty === 'Easy' ? '#2cbb5d' : p.difficulty === 'Medium' ? '#ffa116' : '#ef4743',
              fontSize: '0.85rem'
            }}>
              {p.difficulty}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProblemListDrawer
