import { useState } from 'react';

export default function ButtonSiswa(props) {

  return (
    <div className="flex flex-col justify-ce nter items-center">
      <button 
        onClick={() => props.setShowAktif(!props.showAktif)} 
        className="text-center mt-3 mb-5 max-w-50 bg-blue-300 text-2xl font-bold p-2 rounded-2xl shadow-lg hover:shadow-xl/20"
      >
        {props.showAktif ? 'Liat Siswa Tidak aktif' : 'Liat siswa aktif'}
      </button>


    </div>
  );
}
