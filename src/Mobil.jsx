import { useState } from "react"

export default function Mobil(){

    const [mobil, setMobil] = useState({tahun : 2005, merek: "BMW" , model: "Sedan"})

    function handleTahunMobil(event){
        setMobil(m => ({...mobil, tahun: event.target.value}))
    }
      function handleMerekMobil(event){
        setMobil(m => ({...mobil, merek: event.target.value}))
    }
      function handleModelMobil(event){
        setMobil(m => ({...mobil, model: event.target.value}))
    }

    return(
        <div className="">
            <h1>Mobil Favorit Kamu : {mobil.tahun} {mobil.merek} {mobil.model} </h1>
            <div className="flex flex-col">

            <input type="number" value={mobil.tahun} onChange={handleTahunMobil} />

            <input type="text" value={mobil.merek}  onChange={handleMerekMobil} />

            <input type="text" value={mobil.model}  onChange={handleModelMobil} />
            </div>
        </div>
    )
}