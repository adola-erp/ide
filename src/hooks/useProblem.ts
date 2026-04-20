import { useState, useEffect } from 'react'
import { Problem } from '../types'
import { MOCK_PROBLEMS } from '../data/mockProblems'

export const useProblem = () => {
  const [currentProblem, setCurrentProblem] = useState<Problem>(MOCK_PROBLEMS[0])

  useEffect(() => {
    const handleProblemLoaded = (event: any) => {
      setCurrentProblem(event.detail)
    }

    window.addEventListener('problemLoaded', handleProblemLoaded)
    return () => {
      window.removeEventListener('problemLoaded', handleProblemLoaded)
    }
  }, [])

  const selectProblem = (id: number) => {
    // This is handled by the legacy problems.js when clicking items in the drawer
    if (typeof (window as any).loadProblem === 'function') {
      (window as any).loadProblem(id)
    }
  }

  return { currentProblem, selectProblem, allProblems: MOCK_PROBLEMS }
}
