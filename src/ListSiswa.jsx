import { useState } from 'react';
import Card from './card'

const listSiswa = [
    { nama : 'Waqqir',
      aktif : false ,
      deks : 'HAHAHA'
    },
    { nama : 'Yassir',
      aktif : true,
      deks : 'HAHAHA'
    },
    { nama : 'Rendy',
      aktif : true,
      deks : 'HAHAHA'
    },
    { nama : 'Azzam',
      aktif : true,
      deks : 'HAHAHA'
    },
    { nama : 'Kevin',
      aktif : true,
      deks : 'HAHAHA'
    },
    { nama : 'Agung',
      aktif : true,
      deks : 'HAHAHA'
    },
    { nama : 'Luthfi',
      aktif : true,
      deks : 'HAHAHA'
    },
    { nama : 'Daffa',
      aktif : false,
      deks : 'HAHAHA'
    },
    { nama : 'Nazmi',
      aktif : true,
      deks : 'HAHAHA'
    },
    { nama : 'Ebooo',
      aktif : true,
      deks : 'HAHAHA'
    },
  ];

  // Untuk mengurutkan sesuai alfabet A - Z
  listSiswa.sort((a,b) => a.nama.localeCompare(b.nama))
  
  // Untuk mengurutkan sesaui alfabet Z - A
  // listSiswa.sort((a,b) => b.nama.localeCompare(a.nama))

  const listSiswaAktif = listSiswa.filter(siswa => siswa.aktif)
  const listSiswaTidakAktif = listSiswa.filter(siswa => siswa.aktif == false)
  console.log(listSiswaTidakAktif)
  

  export default function DisplayListSiswa(props){   
    return (
<<<<<<< HEAD
    <div className={`grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 ${props.showSiswa ? '' : 'hidden'}`}>
=======
    <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
>>>>>>> 89f293c65ec25a9ebe3cbd46cf76de5b678b129a
      {props.isShow ? listSiswaAktif.map((siswa, i) => (
        <Card key={i} nama={siswa.nama} aktif={siswa.aktif} deks={siswa.deks}/>
      )) 
      : 
      listSiswaTidakAktif.map((siswa, i) => (
        <Card key={i} nama={siswa.nama} aktif={siswa.aktif} deks={siswa.deks}/>
      ))}
    </div>
    );
  }