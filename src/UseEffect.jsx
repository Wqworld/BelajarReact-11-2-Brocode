import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const [count , setCount] = useState(0)
    const [color, setColor] =  useState("green")

    function Increment(){
        setCount(c => count + 1 )
    }
    function Dicrement() {
        setCount(c => count - 1)
    }
    
    function Color(){
        setColor(c => c === "green" ? "red" : "green")
    }

    useEffect(() => {
      console.log(`kamu memencet tombol ini ${count}`)
    }, [count])
    return (
        <div className='flex flex-col justify-center items-center mt-50'>
            <div className='text-9xl' style={{ color: color }}>                
            {count}
            </div>
            <div className="flex">
                <button className="border-2 rounded-sm m-2 " onClick={Increment}>Tambah</button>
                <button className="border-2 rounded-sm m-2 " onClick={Dicrement}>Kurang</button>
            </div>
            <button onClick={Color} className="border-2 rounded-sm m-2 ">ganti warna</button>
        </div>
    ) 
}

export default UseEffect