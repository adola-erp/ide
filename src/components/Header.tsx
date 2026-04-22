import React from 'react'
import { Settings, LayoutGrid, Sun, Flame, Play, CloudUpload, Loader2, List } from 'lucide-react'

interface HeaderProps {
  onRun: () => void
  onSubmit: () => void
  onToggleTheme: () => void
  onSettingsClick: () => void
  onAppsClick: () => void
  onProblemListClick: () => void
  isRunning?: boolean
}

const Header: React.FC<HeaderProps> = ({
  onRun,
  onSubmit,
  onToggleTheme,
  onSettingsClick,
  onAppsClick,
  onProblemListClick,
  isRunning = false
}) => {
  return (
    <header style={{
      height: '50px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 1rem',
      borderBottom: '1px solid #222',
      backgroundColor: '#1a1a1a',
      zIndex: 10
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        <div className="procode-logo" style={{ fontWeight: 'bold', fontSize: '1.2rem', color: '#ffa116' }}>θ</div>
        <button
          onClick={onProblemListClick}
          style={{
            backgroundColor: '#eeeeee',
            color: '#1a1a1a',
            borderRadius: '4px',
            padding: '5px 12px',
            fontSize: '0.95rem',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            border: 'none',
            cursor: 'pointer',
            fontWeight: '500'
          }}
        >
          <List size={20} />
          <span>Problem List</span>
        </button>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
         <button
           onClick={onRun}
           disabled={isRunning}
           style={{
             backgroundColor: '#eeeeee',
             color: '#1a1a1a',
             borderRadius: '4px',
             padding: '5px 12px',
             display: 'flex',
             alignItems: 'center',
             gap: '6px',
             border: 'none',
             cursor: 'pointer',
             fontWeight: '500',
             fontSize: '0.95rem'
           }}
         >
           {isRunning ? <Loader2 size={18} className="animate-spin" /> : <Play size={18} fill="#2cbb5d" color="#2cbb5d" />}
           <span>Run</span>
         </button>
         <button
           onClick={onSubmit}
           disabled={isRunning}
           style={{
             backgroundColor: '#eeeeee',
             color: '#1a1a1a',
             borderRadius: '4px',
             padding: '5px 12px',
             display: 'flex',
             alignItems: 'center',
             gap: '6px',
             border: 'none',
             cursor: 'pointer',
             fontWeight: '500',
             fontSize: '0.95rem'
           }}
         >
           {isRunning ? <Loader2 size={18} className="animate-spin" /> : <CloudUpload size={18} />}
           <span>Submit</span>
         </button>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
         <button onClick={onToggleTheme} className="ui basic inverted icon button"><Sun size={18} /></button>
         <button onClick={onAppsClick} className="ui basic inverted icon button"><LayoutGrid size={18} /></button>
         <button onClick={onSettingsClick} className="ui basic inverted icon button"><Settings size={18} /></button>
         <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#aaa', fontSize: '0.9rem' }}>
           <Flame size={18} /> <span>0</span>
         </div>
         <div className="ui orange button" style={{ borderRadius: '20px', padding: '8px 15px' }}>Premium</div>
      </div>
    </header>
  )
}

export default Header
