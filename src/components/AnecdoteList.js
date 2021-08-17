import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AnecdoteForm.css'
import { showMsg } from '../reducers/notificationReducer'


const Note = ({ note, handleClick }) => {
    return (

        <li className='liEmelemt'><pre>
            {note.content} <div className='voteID'>{note.votes} </div>
            <Button variant="success" onClick={handleClick} id='voteBtn'>Vote</Button>
        </pre></li>

    )
}
const AnecdoteList = () => {
    const dispatch = useDispatch()
    const  anecdotes = useSelector(state => state.anecdot)
    const filteredNotes = useSelector(state => state.filteredNotes)
    
    let noteToShow = anecdotes;
    if(filteredNotes !== '') noteToShow = filteredNotes; // only where onchange clicked(filter note) then show the result of the filtration

    return (
        <ul>
            {noteToShow.map(singleAnecdote =>
                <Note key={singleAnecdote.id}
                    note={singleAnecdote}
                    handleClick={() => {
                        dispatch(vote(singleAnecdote))
                        console.log('hey')
                        dispatch(showMsg(`You Voted for Blog: ${singleAnecdote.content}`));
                        setTimeout(function () {
                            dispatch(showMsg(``));
                        }, 5000);
                    }
                    }
                />
            )}
        </ul>
    )
}

export default AnecdoteList