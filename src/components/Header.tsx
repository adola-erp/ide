import React from 'react'
import { Sun, Moon, Flame, Play, CloudUpload, Loader2, Home, ChevronLeft, ChevronRight, List, Bell, User } from 'lucide-react'

interface HeaderProps {
  onRun: () => void
  onSubmit: () => void
  onToggleTheme: () => void
  onProblemListClick: () => void
  isRunning?: boolean
  theme?: 'dark' | 'light'
}

const Header: React.FC<HeaderProps> = ({
  onRun,
  onSubmit,
  onToggleTheme,
  onProblemListClick,
  isRunning = false,
  theme = 'dark'
}) => {
  return (
    <header className="procode-main-header">
      <div className="header-left">
        <div className="logo-box">
           <span>L</span>
        </div>
        <div className="divider desktop-only-flex"></div>
        <a href="/" className="icon-link desktop-only-flex" title="Home">
          <Home size={18} />
        </a>
        <button onClick={onProblemListClick} className="problem-list-btn">
          <List size={16} />
          <span className="desktop-only-inline">Problem List</span>
        </button>
        <div className="nav-arrows desktop-only-flex">
           <button className="arrow-btn"><ChevronLeft size={16} /></button>
           <button className="arrow-btn"><ChevronRight size={16} /></button>
        </div>
      </div>

      <div className="header-center desktop-only-flex">
         <button
           onClick={onRun}
           disabled={isRunning}
           className="header-run-btn"
         >
           {isRunning ? <Loader2 size={16} className="animate-spin" /> : <Play size={14} fill="#2cbb5d" color="#2cbb5d" />}
           <span>Run</span>
         </button>
         <button
           onClick={onSubmit}
           disabled={isRunning}
           className="header-submit-btn"
         >
           {isRunning ? <Loader2 size={16} className="animate-spin" /> : <CloudUpload size={16} />}
           <span>Submit</span>
         </button>
      </div>

      <div className="header-right">
         <button onClick={onToggleTheme} className="header-icon-btn" title="Toggle Theme" style={{ color: 'var(--text-color)' }}>
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
         </button>
         <button className="header-icon-btn desktop-only-flex" title="Notifications">
            <Bell size={18} />
         </button>
         <div className="streak-info desktop-only-flex">
           <Flame size={18} fill="#ffa116" color="#ffa116" />
           <span>12</span>
         </div>
         <a href="/premium.html" className="header-premium-btn">Premium</a>
         <div className="header-profile-avatar" onClick={() => window.location.href='/profile.html'}>
            <User size={18} />
         </div>
      </div>
    </header>
  )
}

export default Header
