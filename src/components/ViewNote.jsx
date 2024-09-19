// ViewNote.jsx
import React, { useContext } from 'react';
import { NotesContext } from './NotesContext';
import { useParams, useNavigate } from 'react-router-dom';
import '../css/view.css'

export default function ViewNote() {
    const { id } = useParams();
    const { notes } = useContext(NotesContext);
    const navigate = useNavigate();

    const note = notes[id];

    return (
        <div className='view-note'>
            <button onClick={() => navigate('/')}>Back</button>
            <div className='note-content'>
                {note}
            </div>
        </div>
    );
}
