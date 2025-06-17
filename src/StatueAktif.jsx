export default function StatusAktif({aktif}){
    return(
       <p className={`text-center ${aktif ? ' text-green-400' : 'text-red-400'}`}>
        {aktif ? 'Siswa Aktif' : 'Siswa Ga aktif'}</p>
    )
}