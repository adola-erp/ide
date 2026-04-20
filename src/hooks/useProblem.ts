import { useState } from 'react'
import { Problem } from '../types'
import { MOCK_PROBLEMS } from '../data/mockProblems'

export const useProblem = () => {
  const [currentProblem, setCurrentProblem] = useState<Problem>(MOCK_PROBLEMS[0])

  const selectProblem = (id: number) => {
    const found = MOCK_PROBLEMS.find(p => p.id === id)
    if (found) setCurrentProblem(found)
  }

  return { currentProblem, selectProblem, allProblems: MOCK_PROBLEMS }
}
