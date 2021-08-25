import React from 'react'
import { createNote, vote } from '../reducers/anecdoteReducer'
import { showMsg } from '../reducers/notificationReducer'
import './AnecdoteForm.css'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux'

const AnecdoteForm = (props) => {
    const addNote = async (event) => {
        event.preventDefault();
        const content = event.target.newNote.value;
        event.target.newNote.value = ''
        props.createNote(content);
        props.showMsg(`New Blog is Added`);
        // setTimeout(function () {
        //     props.showMsg(``);
        // }, 5000);
    }
    return (
        <div>

            <form onSubmit={addNote} className='votingCreate'>
                <input name="newNote" placeholder='Add New Note' />
                <Button type='submit' variant="outline-secondary">Create</Button>
            </form>
        </div >
    )
}
const mapStateToProps = (state) => {
    return {
        anecdot: state.anecdot,
        filteredNotes: state.filteredNotes,
    }
}

const mapDispatchToProps = {
    createNote,
    showMsg
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AnecdoteForm)
