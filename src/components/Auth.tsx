import React, { useState } from 'react'
import { supabase } from '../lib/supabase'
import { LogIn, UserPlus, Loader2, Mail, Lock } from 'lucide-react'

const Auth: React.FC = () => {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isSignUp, setIsSignUp] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      if (isSignUp) {
        const { error } = await supabase.auth.signUp({ email, password })
        if (error) throw error
        alert('Check your email for the confirmation link!')
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email, password })
        if (error) throw error
      }
    } catch (err: any) {
      setError(err.message || 'An error occurred during authentication')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#0b0e14] px-4">
      <div className="w-full max-w-md bg-[#1a1d23] border border-white/5 p-8 rounded-[2.5rem] shadow-2xl">
        <div className="text-center mb-8">
           <div className="inline-flex w-12 h-12 bg-[#ff5a00] rounded-xl items-center justify-center text-white font-black text-2xl mb-4 shadow-lg shadow-[#ff5a00]/20">P</div>
           <h2 className="text-2xl font-black text-white">{isSignUp ? 'Create Account' : 'Welcome Back'}</h2>
           <p className="text-slate-400 text-sm mt-2">{isSignUp ? 'Join ProCode to start solving.' : 'Sign in to your account to continue.'}</p>
        </div>

        <form onSubmit={handleAuth} className="space-y-4">
          <div className="relative group">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-[#ff5a00] transition-colors" size={18} />
            <input
              type="email"
              placeholder="Email address"
              className="w-full bg-[#0b0e14] border border-white/5 rounded-2xl py-4 pl-12 pr-4 text-sm text-white focus:outline-none focus:ring-1 ring-[#ff5a00]/50 transition-all"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="relative group">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-[#ff5a00] transition-colors" size={18} />
            <input
              type="password"
              placeholder="Password"
              className="w-full bg-[#0b0e14] border border-white/5 rounded-2xl py-4 pl-12 pr-4 text-sm text-white focus:outline-none focus:ring-1 ring-[#ff5a00]/50 transition-all"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error && <div className="text-rose-500 text-xs font-bold px-2">{error}</div>}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#ff5a00] text-white py-4 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-[#ff7e00] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#ff5a00]/20"
          >
            {loading ? <Loader2 size={18} className="animate-spin" /> : isSignUp ? <><UserPlus size={18} /> Sign Up</> : <><LogIn size={18} /> Sign In</>}
          </button>
        </form>

        <div className="mt-8 text-center pt-6 border-t border-white/5">
           <button
             onClick={() => setIsSignUp(!isSignUp)}
             className="text-slate-400 text-xs font-bold hover:text-[#ff5a00] transition-colors tracking-tight"
           >
             {isSignUp ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
           </button>
        </div>
      </div>
    </div>
  )
}

export default Auth
