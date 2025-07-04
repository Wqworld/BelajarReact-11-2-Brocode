import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import DisplayListSiswa from './ListSiswa';
import Button from './Button';
import ButtonSiswa from './ButtonLagi';
import Increment from './Increment';
import ButtonShowSiswa from './ButtonShowSiswa';
import InputOnChange from './InputOnChange';
import ColorPicker from './ColorPicker';
import Mobil from './Mobil';
import Makanan from './Makanan';
import ToDoList from './ToDoList';
import UseEffect from './UseEffect';

function App() {
  const [showAktif, setShowAktif] = useState(false);
  const [showSiswa, setShowSiswa] = useState(false);

  return (
    <>
      {/* <div className="flex justify-center items-center">
        <DisplayListSiswa isShow={showAktif} showSiswa={showSiswa}/>
      </div>
      <div className="flex justify-center items-center gap-2">
        <ButtonSiswa showAktif={showAktif} setShowAktif={setShowAktif}/>
        <ButtonShowSiswa showSiswa={showSiswa} setShowSiswa={setShowSiswa} />
        <DisplayListSiswa isShow={showAktif}/> 
      </div>
      <Increment/>  
      <InputOnChange/>
      <ColorPicker/>
      <Mobil/>
      
      <Makanan/>

      
      <Mobil/>
      <br></br>
      <ToDoList/> */}

        <UseEffect/>


    </>
  );
}

export default App;
