import { useState } from "react"

export default function Increment() {
    const [count, setCount] = useState(0);

    function increment() {
        setCount(count + 1)
        console.log(count)
    }
    function decrement() {
        setCount(count - 1)
        console.log(count)
    }
    function reset() {
        setCount(0)
        console.log(count)
    }

    return(
        <div className="text-center mt-10">
            <div className="text-8xl">{count}</div>
           
            <button onClick={decrement} className="relative cursor-pointer opacity-90 hover:opacity-100 transition-opacity p-[2px] bg-black rounded-[16px] bg-gradient-to-t from-[#8122b0] to-[#dc98fd] active:scale-95">
                <span
                    className="w-full h-full flex items-center gap-2 px-8 py-3 bg-[#B931FC] text-white rounded-[14px] bg-gradient-to-t from-[#a62ce2] to-[#c045fc]">
                    Kurang
                </span>
            </button>
            <button onClick={reset} className="mx-5 relative cursor-pointer opacity-90 hover:opacity-100 transition-opacity p-[2px] bg-black rounded-[16px] bg-gradient-to-t from-[#8122b0] to-[#dc98fd] active:scale-95">
                <span
                    className="w-full h-full flex items-center gap-2 px-8 py-3 bg-[#B931FC] text-white rounded-[14px] bg-gradient-to-t from-[#a62ce2] to-[#c045fc]">
                    Reset
                </span>
            </button>
             <button onClick={increment} className="relative cursor-pointer opacity-90 hover:opacity-100 transition-opacity p-[2px] bg-black rounded-[16px] bg-gradient-to-t from-[#8122b0] to-[#dc98fd] active:scale-95">
                <span
                    className="w-full h-full flex items-center gap-2 px-8 py-3 bg-[#B931FC] text-white rounded-[14px] bg-gradient-to-t from-[#a62ce2] to-[#c045fc]">
                    Tambah
                </span>
            </button>
        </div>
    )
}