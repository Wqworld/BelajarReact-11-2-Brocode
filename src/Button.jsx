export default function Button(){
    let count = 0;
    function handleClick(nama){
        if(count < 3){
            count++;
            console.log(`${nama} mengklik aku sebanyak ${count}`)
        }
        else{
            console.log(`${nama} tega kamu mengklik aku sebanyak ${count}`)
        }
    }

    return(
        <div className="flex justify-center items-center ">
            <button onClick={() => handleClick("waqqir")} className="text-center mt-3 mb-20 max-w-50 bg-blue-300 text-2xl font-bold p-2 rounded-2xl shadow-lg hover:shadow-xl/20">Klik saya dong</button>
        </div>
    )
}