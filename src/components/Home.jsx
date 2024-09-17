import React, { useContext } from 'react';
import AddIcon from '@mui/icons-material/Add';
import '../css/home.css'; 
import { useNavigate } from 'react-router-dom';
import { NotesContext } from './NotesContext';

export default function Home() {
    const navigate = useNavigate();
    const { notes } = useContext(NotesContext);

    const handleAddNote = () => {
        navigate('/editor');
    };

    const pastelColors = [
        "#FFB3BA", "#FFDFBA", "#FFFFBA", "#BAFFC9", "#BAE1FF", 
        "#E6B3FF", "#B3FFEC", "#FFB3E6", "#FFD1B3", "#FFF0BA"
    ];

    return (
      <>
        <div className='home'>
          <div className='content'>
              {notes.length === 0 ? (
                  <>
                      <img src='Notes-bro.png' alt='illustration' className='illustration'/>
                      <h5>Create your first note!</h5>
                  </>
              ) : (
                  <div className='notes-list'>
                      {notes.map((note, index) => (
                          <div
                              key={index}
                              className='note-item'
                              style={{
                                  backgroundColor: pastelColors[index % pastelColors.length]
                              }}
                          >
                              {note}
                          </div>
                      ))}
                  </div>
              )}
          </div>
          <div className='add-note' onClick={handleAddNote}>
              <AddIcon className='add-icon' />
          </div>
        </div>
      </>
    );
}
