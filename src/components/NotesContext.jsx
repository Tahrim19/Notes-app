import { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const NotesContext = createContext();

export const NotesProvider = ({ children }) => {
    const [notes, setNotes] = useLocalStorage('notes', []);

    // Add a new note
    const addNote = (newNote) => {
        setNotes([...notes, newNote]);
    };

    // Edit an existing note by index
    const editNote = (index, updatedNote) => {
        const updatedNotes = [...notes];
        updatedNotes[index] = updatedNote;
        setNotes(updatedNotes);
    };

    // Delete a note by index
    const deleteNote = (index) => {
        const updatedNotes = notes.filter((_, i) => i !== index);
        setNotes(updatedNotes);
    };

    return (
        <NotesContext.Provider value={{ notes, addNote, editNote, deleteNote }}>
            {children}
        </NotesContext.Provider>
    );
};
