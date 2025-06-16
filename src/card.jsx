import gamabarsaya from '../src/assets/WQWQ.jpg'
import StatusAktif from './StatueAktif'

export default function Card({nama = 'waqqir', aktif = false, deks= 'HIHIHI'}){

    return(
        <div className=" m-5 max-w-70 p-5 rounded-2xl shadow-lg hover:shadow-xl/20">
            <div className="px-10 pt-5">
                <img src={gamabarsaya} alt="Gambar waqqir" className='rounded-full'/>
            </div>
            <h1 className='text-center font-bold mt-5 mb-2 text-2xl'>{nama}</h1>
            <p className='text-center text-gray-400'>{deks}</p>
            <StatusAktif aktif={aktif}/>
        </div>
    )
}
