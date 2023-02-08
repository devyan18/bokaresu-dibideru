import { useEffect, useState } from 'react'
import VocalsBar from './components/VocalsBar'
import { getKatakanasGroupByVocal } from './utils/katakanas'
import './App.css'

function App () {
  const [selectedVocals, setSelectedVocales] = useState([])
  const [currentViewKatakana, setCurrentViewKatakana] = useState('')
  const [currentViewRomaji, setCurrentViewRomaji] = useState('')
  const [mode, setMode] = useState(false)

  const selectVocal = (vocal) => {
    const katakanas = getKatakanasGroupByVocal(vocal)

    const groupKatakanaAndRomaji = katakanas.map((katakana) => [
      katakana.katakana,
      katakana.romaji
    ])

    setSelectedVocales(groupKatakanaAndRomaji)
  }

  const generate = () => {
    if (selectedVocals.length > 0) {
      const randomIndex = Math.floor(Math.random() * selectedVocals.length)
      const [katakana, romaji] = selectedVocals[randomIndex]

      setCurrentViewKatakana(katakana)
      setCurrentViewRomaji(romaji)
    }
  }

  useEffect(() => {
    generate()
  }, [selectedVocals])

  return (
    <div className='App'>
      {selectedVocals.length > 0 && (
        <div className='currentView'>
          {mode ? <h1>{currentViewRomaji}</h1> : <h1>{currentViewKatakana}</h1>}
        </div>
      )}
      <div className='app'>
        <VocalsBar selectedVocal={selectVocal} />
        <div className='actions'>
          <button className='btnMode' onClick={() => setMode(!mode)}>
            mode: {mode ? 'Romaji' : 'Katakana'}
          </button>
          <button className='btnMode' onClick={generate}>
            generate
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
