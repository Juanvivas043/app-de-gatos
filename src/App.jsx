import './app.css'
import { useCatImg } from './hooks/useCatImg.js'
import { useCatFact } from './hooks/useCatFact.js'

function App () {
  const { fact, refreshFact } = useCatFact()
  const { imageUrl } = useCatImg({ fact })

  const handleClick = () => {
    refreshFact()
  }

  return (
    <main>
      <h1>App de Gatos 🐱</h1>
      {fact && <p>{fact}</p>}
      <div>
        {imageUrl && <img src={`${imageUrl}`} alt={`imagen extraida usando los primeras 3 palabras de ${fact}`} />}
      </div>
      <button onClick={handleClick}>Otro Facto</button>
    </main>
  )
}

export default App
