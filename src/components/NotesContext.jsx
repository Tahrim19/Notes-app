import { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const NotesContext = createContext();

// create provider component
export const NotesProvider = ({children}) => {
    const [notes, setNotes] = useLocalStorage('notes',[]);
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