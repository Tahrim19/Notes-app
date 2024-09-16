// import React from 'react'
// import SearchIcon from '@mui/icons-material/Search';
// import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
// import '../css/home.css'
// import AddIcon from '@mui/icons-material/Add';

// export default function () {
//   return (
//     <div className='home'>
//         <div className='heading-area'>
//             <h2>Notes</h2>
//             <SearchIcon/>
//             <InfoOutlinedIcon/>
//         </div>
//         <div>
//             <img src='Notes-bro.png' alt='illustration'/>
//             <h5>Create your first note!</h5>
//         </div>
//         <div className='add-note'>
//             <AddIcon/>
//         </div>
//     </div>
//   )
// }


import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import AddIcon from '@mui/icons-material/Add';
import '../css/home.css'; 

export default function Home() {
  return (
    <div className='home'>
      <div className='heading-area'>
        <h2>Notes</h2>
        <div className='icons'>
          <SearchIcon className='icon'/>
          <InfoOutlinedIcon className='icon'/>
        </div>
      </div>
      <div className='content'>
        <img src='Notes-bro.png' alt='illustration' className='illustration'/>
        <h5>Create your first note!</h5>
      </div>
      <div className='add-note'>
        <AddIcon className='add-icon'/>
      </div>
    </div>
  );
}
