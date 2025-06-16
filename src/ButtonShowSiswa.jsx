export default function ButtonShowSiswa(props) {

  return (
    <div className="flex flex-col justify-center items-center">
      <button 
        onClick={() => props.setShowSiswa(!props.showSiswa)} 
        className="text-center mt-3 mb-5 max-w-50 bg-blue-300 text-2xl w-40 h-15  font-bold p-2 rounded-2xl shadow-lg hover:shadow-xl/20"
      >
        {props.showSiswa ? 'Tutup Siswa' : 'Liat Siswa'}
      </button>


    </div>
  );
}