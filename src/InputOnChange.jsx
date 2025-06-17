import { useState } from "react"

export default function InputOnChange(){

    const [nama,setNama] = useState("Guest")
    const [jumlah, setJumlah] = useState(1)
        
    function HandleChangeNama(event){
        setNama(event.target.value)
    }

    function HandleChangeJumlah(event){
        setJumlah(event.target.value)
    }
    return(
<div className="min-h-screen flex justify-center items-center bg-gray-100">
  <div className="bg-gray-400 p-15 rounded-xl shadow-md">
    <input 
      type="text" 
      className="bg-blue-200 p-2 w-full mb-4" 
      onChange={HandleChangeNama} 
      value={nama} 
      placeholder="Masukkan nama"
    />
    <p className="border-2 flex justify-center items-center w-full mt-2 p-2 bg-white">Name : {nama}</p>

    <input 
      type="number" 
      className="bg-blue-200 p-2 w-full mt-4" 
      onChange={HandleChangeJumlah} 
      value={jumlah} 
      placeholder="Masukkan jumlah"
    />
    <p className="border-2 flex justify-center items-center w-full mt-2 p-2 bg-white">Jumlah : {jumlah}</p>

  </div>
</div>

    )
}