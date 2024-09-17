import React, { useContext, useState } from 'react'
import { NotesContext } from './NotesContext';
import { useNavigate } from 'react-router-dom';
import '../css/editor.css'

export default function Editor() {
    const [note , setNote] = useState('');
    const {addNote} = useContext(NotesContext);
    const navigate  = useNavigate();

    const handleSave = () => {
        if(note.trim()){
            addNote(note);
            setNote('');
            navigate('/');
        }
        else{
            console('note cannot be empty!')
        }
    }

  return (
    <div className='editor'>
      <textarea
        className='note-editor'
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder='Write your note here...'
      />
      <button className='save-btn' onClick={handleSave}>Save</button>
    </div>
  )
}
