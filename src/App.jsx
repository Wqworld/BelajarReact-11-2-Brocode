import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DisplayListSiswa from './ListSiswa'
import Button from './Button'
import ButtonSiswa from './ButtonLagi'

function App() {
  const [showAktif , setShowAktif] = useState(false)

  return (
    <>
    <div className="flex justify-center items-center">
      <DisplayListSiswa isShow={showAktif}/> 
    </div>
    <ButtonSiswa showAktif={showAktif} setShowAktif={setShowAktif}/>
    </>
  )
}

export default App
