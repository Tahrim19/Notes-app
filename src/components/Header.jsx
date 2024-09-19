import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import '../css/header.css'
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';


export default function Header() {
  const navigate = useNavigate();
  const handleAddNote = () => {
    navigate('/editor');
  };
  return (
    <div className='heading-area'>
    <h2>Notes</h2>
    <div className='icons'>
      <SearchIcon className='icon'/>
      <AddIcon className='icon' onClick={handleAddNote}/>
    </div>
  </div>
  )
}
