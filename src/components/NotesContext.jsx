import { createContext, useState } from "react";

export const NotesContext = createContext();

// create provider component
export const NotesProvider = ({children}) => {
    const [notes, setNotes] = useState([]);
    // add new note
    const addNote = (newNote) => {
        setNotes([...notes,newNote])
    };

    return(
        <NotesContext.Provider value={{notes,addNote}}>
            {children}
        </NotesContext.Provider>
    );

}