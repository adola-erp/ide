import React from 'react'
import { Settings, User, Plus, LayoutGrid, Moon, Sun, Flame, Play, CloudUpload } from 'lucide-react'

interface HeaderProps {
  onRun: () => void
  onSubmit: () => void
}

const Header: React.FC<HeaderProps> = ({ onRun, onSubmit }) => {
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
        <button className="ui basic inverted button" style={{ borderRadius: '20px', padding: '6px 15px', fontSize: '0.85rem' }}>
          Problem List
        </button>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
         <button onClick={onRun} className="ui basic inverted icon button" style={{ color: '#2cbb5d' }}>
           <Play size={18} fill="#2cbb5d" />
         </button>
         <button onClick={onSubmit} className="ui green button" style={{ borderRadius: '8px', padding: '8px 15px', display: 'flex', alignItems: 'center', gap: '5px' }}>
           <CloudUpload size={18} /> <span>Submit</span>
         </button>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
         <button className="ui basic inverted icon button"><Sun size={18} /></button>
         <button className="ui basic inverted icon button"><LayoutGrid size={18} /></button>
         <button className="ui basic inverted icon button"><Settings size={18} /></button>
         <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#aaa', fontSize: '0.9rem' }}>
           <Flame size={18} /> <span>0</span>
         </div>
         <div className="ui orange button" style={{ borderRadius: '20px', padding: '8px 15px' }}>Premium</div>
      </div>
    </header>
  )
}

export default Header
