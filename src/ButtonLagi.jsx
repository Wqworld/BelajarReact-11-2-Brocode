import { useState } from 'react';

export default function ButtonSiswa(props) {
  return (
    <div className="flex flex-col justify-center items-center">
      <button 
        onClick={() => props.setShowAktif(!props.showAktif)} 
        className="text-center mt-3 mb-5 max-w-50 bg-blue-300 text-2xl w-full h-15 font-bold p-2 rounded-2xl shadow-lg hover:shadow-xl/20"
      >
        {props.showAktif ? 'Lihat Siswa Tidak Aktif' : 'Lihat Siswa Aktif'}
      </button>
    </div>
  );
}
