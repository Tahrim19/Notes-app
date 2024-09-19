import React, { useContext } from 'react';
import { Menu, MenuItem } from '@mui/material';
import { NotesContext } from './NotesContext';
import { useNavigate } from 'react-router-dom';

export default function NoteMenu({ anchorEl, open, onClose, index }) {
    const { deleteNote } = useContext(NotesContext);
    const navigate = useNavigate();

    const handleView = () => {
        navigate(`/view/${index}`);
        onClose();
    };

    const handleEdit = () => {
        navigate(`/editor?edit=${index}`);
        onClose();
    };

    const handleDelete = () => {
        deleteNote(index);
        onClose();
    };

    return (
        <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={onClose}
        >
            <MenuItem onClick={handleView}>View</MenuItem>
            <MenuItem onClick={handleEdit}>Edit</MenuItem>
            <MenuItem onClick={handleDelete}>Delete</MenuItem>
        </Menu>
    );
}
