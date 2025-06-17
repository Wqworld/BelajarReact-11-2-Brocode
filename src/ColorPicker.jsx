import { useState } from "react"


export default function ColorPicker(){
    const [color , setColor] = useState("#FFFFFF")

    function HandleColorChange(event){
        setColor(event.target.value)
    }

    return(
        <div className="flex flex-col justify-center items-center mb-50 mt-20">
            <h1 className="font-bold text-2xl font-sans">Color Picker</h1>
            <div className="border-2 w-50 h-60 rounded-2xl mt-10">
                <div className="border-2 m-3 rounded-2xl h-42" style={{ background: color }}></div>
                <p className="m-2">selected Color : {color}</p>
            </div>
            <label htmlFor=""> select a Color :</label>
            <input className="border-2 w-40 rounded-2xl" type="color" value={color} onChange={HandleColorChange} />
        </div>
    )
}