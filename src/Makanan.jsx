import { useState } from "react";

export default function Makanan(){
    const [makanan, setMakanan] = useState(["apel", "pisang", "semangka"])

    function handleTambahMakanan(){

        const makananBaru  = document.getElementById("makananInput").value;
        document.getElementById("makananInput").value = "";

        setMakanan(m => [...makanan, makananBaru])
    }

    function handleHapusMakanan(index){
        setMakanan(m => makanan.filter((_, i) => i !== index))    
    }

    return(
        <div>
            <h2>LIst of makanan</h2>
            <ul>
                {
                    makanan.map((makanan,i) => 
                        <li key={i} onClick={() => handleHapusMakanan(i)}>
                            {makanan}
                        </li>
                    )
                }
            </ul>
            <input type="text" id="makananInput" placeholder="Masukan nama makanan" />
            <button onClick={handleTambahMakanan}>Tambah makanan</button>
        </div>
    )
}