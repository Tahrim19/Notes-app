import React, { useContext, useState, useEffect } from 'react';
import { NotesContext } from './NotesContext';
import { useNavigate, useLocation } from 'react-router-dom';
import '../css/editor.css';

export default function Editor() {
    const [note, setNote] = useState('');
    const { notes, addNote, editNote } = useContext(NotesContext);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const query = new URLSearchParams(location.search);
        const editIndex = query.get('edit');
        if (editIndex !== null) {
            setNote(notes[parseInt(editIndex)]);
        }
    }, []);

    const handleSave = () => {
        const query = new URLSearchParams(location.search);
        const editIndex = query.get('edit');
        if (editIndex !== null) {
            editNote(parseInt(editIndex), note);
        } else {
            if (note.trim()) {
                addNote(note);
            }
        }
        setNote('');
        navigate('/');
    };

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
    );
}
