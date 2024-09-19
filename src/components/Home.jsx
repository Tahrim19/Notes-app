import React, { useContext, useState } from 'react';
import '../css/home.css'; 
import { NotesContext } from './NotesContext';
import NoteMenu from './NoteMenu';

export default function Home() {
    const { notes } = useContext(NotesContext);
    const [anchorEl , setAnchorEl] = useState(null);
    const [selectedIndex , setSelectedIndex] = useState(null);

    const pastelColors = [
        "#FFB3BA", "#FFDFBA", "#FFFFBA", "#BAFFC9", "#BAE1FF", 
        "#E6B3FF", "#B3FFEC", "#FFB3E6", "#FFD1B3", "#FFF0BA"
    ];

    const truncatedText = (note) => {
        return note.length > 15? note.substring(0,15)+'...' : note ;
    }

    const handleNoteClick = (e, index) => {
        setAnchorEl(e.currentTarget);
        setSelectedIndex(index);
    }

    const handleCloseMenu = () => {
        setAnchorEl(null);
    }

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
                              onClick={(e) => handleNoteClick(e,index)}
                          >
                              {truncatedText(note)}
                          </div>
                      ))}
                  </div>
              )}
          </div>
        </div>
        <NoteMenu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleCloseMenu}
            index={selectedIndex}
        />
      </>
    );
}
