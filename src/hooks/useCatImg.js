import { fetchCatImg } from '../services/facts'
import { useState, useEffect } from 'react'

export function useCatImg ({ fact }) {
  const [imageUrl, setImageUrl] = useState()

  useEffect(() => {
    if (!fact) return
    const threeFisrtWords = fact.split(' ', 3).join(' ')
    fetchCatImg({ threeFisrtWords }).then(setImageUrl)
  }, [fact])
  return { imageUrl }
}
