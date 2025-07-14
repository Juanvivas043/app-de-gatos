import { fetcFact } from '../services/facts'
import { useEffect, useState } from 'react'

export const useCatFact = () => {
  const [fact, setFact] = useState()

  const refreshFact = () => {
    fetcFact().then(setFact)
  }

  useEffect(refreshFact, [])

  return { fact, refreshFact }
}
