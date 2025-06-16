import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DisplayListSiswa from './ListSiswa'
import Button from './Button'
import ButtonSiswa from './ButtonLagi'
import Increment from './Increment'
import ButtonShowSiswa from './ButtonShowSiswa'

function App() {
  const [showAktif , setShowAktif] = useState(false)
  const [showSiswa, setShowSiswa] = useState(false)

  return (
    <>
    <div className="flex justify-center items-center">
      <DisplayListSiswa isShow={showAktif} showSiswa={showSiswa}/>

    </div>
    <div className="flex justify-center items-center gap-2">

    <ButtonSiswa showAktif={showAktif} setShowAktif={setShowAktif}/>
    <ButtonShowSiswa showSiswa={showSiswa} setShowSiswa={setShowSiswa} />
    </div>
    <Increment/>
    </>
  )
}

export default App
