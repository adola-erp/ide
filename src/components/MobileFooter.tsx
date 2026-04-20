import React from 'react'
import { Play, CloudUpload, FileText, Code, CheckSquare, } from 'lucide-react'

interface MobileFooterProps {
  onRun: () => void
  onSubmit: () => void
  onTabChange: (tab: string) => void
  activeTab: string
  isRunning?: boolean
}

const MobileFooter: React.FC<MobileFooterProps> = ({
  onRun,
  onSubmit,
  onTabChange,
  activeTab,
  isRunning = false
}) => {
  return (
    <footer className="mobile-footer" style={{ display: 'none' }}>
      <button
        className={`mobile-footer-btn ${activeTab === 'description' ? 'active' : ''}`}
        onClick={() => onTabChange('description')}
      >
        <FileText size={20} />
        <span>Description</span>
      </button>

      <button
        className={`mobile-footer-btn ${activeTab === 'editor' ? 'active' : ''}`}
        onClick={() => onTabChange('editor')}
      >
        <Code size={20} />
        <span>Editor</span>
      </button>

      <button
        className={`mobile-footer-btn ${activeTab === 'testcase' ? 'active' : ''}`}
        onClick={() => onTabChange('testcase')}
      >
        <CheckSquare size={20} />
        <span>Testcase</span>
      </button>

      <div className="mobile-footer-actions">
        <button
          className="mobile-footer-btn run-btn"
          onClick={onRun}
          disabled={isRunning}
        >
          <Play size={20} />
          <span>Run</span>
        </button>

        <button
          className="mobile-footer-btn submit-btn"
          onClick={onSubmit}
          disabled={isRunning}
        >
          <CloudUpload size={20} />
          <span>Submit</span>
        </button>
      </div>
    </footer>
  )
}

export default MobileFooter
