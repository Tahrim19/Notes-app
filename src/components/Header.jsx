import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import '../css/header.css'

export default function Header() {
  return (
    <div className='heading-area'>
    <h2>Notes</h2>
    <div className='icons'>
      <SearchIcon className='icon'/>
      <InfoOutlinedIcon className='icon'/>
    </div>
  </div>
  )
}
