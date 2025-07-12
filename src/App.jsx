import { useState, useEffect } from 'react'
import './app.css'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'

// const CAT_ENDPOINT_IMAGE_URL = `ttps://cataas.com/cat/says/${firstWord}?
// size=50&color=red&json=true`

function App () {
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()
  const [factError, setFactError] = useState()

  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(res => {
        if (!res.ok) {
          setFactError('No se ha podido recuperar la cita')
        }
        return res.json()
      })
      .then(data => {
        const { fact } = data
        setFact(fact)
      })
  }, [])

  useEffect(() => {
    if (!fact) return
    const threeFisrtWords = fact.split(' ', 3).join(' ')

    fetch(`https://cataas.com/cat/says/${threeFisrtWords}?size=50&color=red&json=true`)
      .then(res => res.json())
      .then(response => {
        const { url } = response
        setImageUrl(url)
      })
  }, [fact])

  return (
    <main>
      <h1>App de Gatitos</h1>
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={`${imageUrl}`} alt={`imagen extraida usando los primeras 3 palabras de ${fact}`} />}
    </main>
  )
}

export default App
