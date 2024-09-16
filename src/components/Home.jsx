import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import '../css/home.css'; 
export default function Home() {
  return (
    <div className='home'>
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
