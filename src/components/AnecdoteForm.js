import React from 'react'
import { useDispatch } from 'react-redux'
import { createNote, vote } from '../reducers/anecdoteReducer'
import { showMsg } from '../reducers/notificationReducer'

import './AnecdoteForm.css'
import Button from 'react-bootstrap/Button';
import Notification from './Notification';
import 'bootstrap/dist/css/bootstrap.min.css';
import InputGroup from 'react-bootstrap/InputGroup';
import noteService from '../services/fetchnotes'


const AnecdoteForm = () => {
    const dispatch = useDispatch()

    const addNote = async (event) => {
        event.preventDefault();
        const content = event.target.newNote.value;
        event.target.newNote.value = ''
        dispatch(createNote(content))
        dispatch(showMsg(`New Blog is Added`));
        setTimeout(function(){
            dispatch(showMsg(``)); 
            }, 5000);
    }
    return (
        <div>
            
            <form onSubmit={addNote} className='votingCreate'>
                <input name="newNote" placeholder='Add New Note'/>
                <Button type='submit' variant="outline-secondary">Create</Button>
            </form>
        </div >
    )
}

export default AnecdoteForm