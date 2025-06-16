import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DisplayListSiswa from './ListSiswa'
import Button from './Button'
import ButtonSiswa from './ButtonLagi'
<<<<<<< HEAD
import Increment from './Increment'
import ButtonShowSiswa from './ButtonShowSiswa'

function App() {
  const [showAktif , setShowAktif] = useState(false)
  const [showSiswa, setShowSiswa] = useState(false)
=======

function App() {
  const [showAktif , setShowAktif] = useState(false)
>>>>>>> 89f293c65ec25a9ebe3cbd46cf76de5b678b129a

  return (
    <>
    <div className="flex justify-center items-center">
<<<<<<< HEAD
      <DisplayListSiswa isShow={showAktif} showSiswa={showSiswa}/>

    </div>
    <div className="flex justify-center items-center gap-2">

    <ButtonSiswa showAktif={showAktif} setShowAktif={setShowAktif}/>
    <ButtonShowSiswa showSiswa={showSiswa} setShowSiswa={setShowSiswa} />
    </div>
    <Increment/>
=======
      <DisplayListSiswa isShow={showAktif}/> 
    </div>
    <ButtonSiswa showAktif={showAktif} setShowAktif={setShowAktif}/>
>>>>>>> 89f293c65ec25a9ebe3cbd46cf76de5b678b129a
    </>
  )
}

export default App
