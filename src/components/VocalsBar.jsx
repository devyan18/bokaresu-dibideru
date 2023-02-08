import { getKatakanasGroupVocal } from '../utils/katakanas'
import { useEffect, useState } from 'react'
import ButtonVocal from './ButtonVocal'

export default function VocalsBar ({
  selectedVocal
}) {
  const [vocals, setVocals] = useState([])
  const [selected, setSelected] = useState('a')

  const changeSelectedVocal = (vocal) => {
    setSelected(vocal)
  }

  useEffect(() => {
    const vocalsMapping = getKatakanasGroupVocal().map(group => group.vocal)
    setVocals(vocalsMapping)
  }, [])

  useEffect(() => {
    selectedVocal(selected)
  }, [selected])

  return (
    <div className='vocals'>
      {
          vocals.map((vocal, index) => {
            return (
              <ButtonVocal
                key={index}
                vocal={vocal}
                selected={selected}
                onClick={changeSelectedVocal}
              />
            )
          })
        }
    </div>
  )
}
