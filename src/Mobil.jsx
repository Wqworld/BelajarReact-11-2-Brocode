import { useState } from "react"

export default function Mobil(){

    const [mobil, setMobil] = useState([
        {
            tahun: 2005,
            merek: "Toyota",
            model: "SUV"
        },
        {
            tahun: 2002,
            merek: "BMW",
            model: "SUV"
        },
        {
            tahun: 2004,
            merek: "Mitsubisi",
            model: "SUV"
        },
        {
            tahun: 2006,
            merek: "Toyota lagi",
            model: "SUV"
        },
        {
            tahun: 2001,
            merek: "Toyota lagi lagi",
            model: "SUV"
        },
       
    ])

    // function handleTahunMobil(event){
    //     setMobil(m => ({...mobil, tahun: event.target.value}))
    // }
    //   function handleMerekMobil(event){
    //     setMobil(m => ({...mobil, merek: event.target.value}))
    // }
    //   function handleModelMobil(event){
    //     setMobil(m => ({...mobil, model: event.target.value}))
    // }

    function HandleForm(e){

        e.preventDefault()
        const form = e.target;
        const merek = form.merek.value;
        const tahun = form.tahun.value;
        const model = form.model.value;

        setMobil(m => [...mobil, {merek: merek , tahun: tahun , model:model}])
    }

    function HandleHapusData(index){
        setMobil(mobil.filter((_, i) => i !== index))
    }

    return(
        <div className="bg-blue-400 m-5 w-100 rounded-2xl p-5">
            <ul>
                {
                    mobil.map((m,i) => 
                    <li key={i} className="bg-blue-300 m-2 rounded-sm" onClick={() => HandleHapusData(i)}>Tahun : {m.tahun} Merek : {m.merek} Model : {m.model}</li>
                    )
                }
            </ul>

            <form onSubmit={HandleForm} >
                <input type="number" name="tahun" placeholder="tahun mobil" className="border rounded-sm m-1"/>
                <input type="text" name="merek" placeholder="merek mobil"className="border rounded-sm m-1"/>
                <input type="text" name="model" placeholder="model mobil"className="border rounded-sm m-1"/>
                <input type="submit" className="bg-amber-200 rounded-sm p-2"/>
            </form>
        </div>
    )
}