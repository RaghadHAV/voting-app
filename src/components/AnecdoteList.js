import React from 'react'
import { vote } from '../reducers/anecdoteReducer'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AnecdoteForm.css'
import { showMsg } from '../reducers/notificationReducer'
import { connect } from 'react-redux'


const Note = ({ note, handleClick }) => {
    return (

        <li className='liEmelemt'><pre>
            {note.content} <div className='voteID'>{note.votes} </div>
            <Button variant="success" onClick={handleClick} id='voteBtn'>Vote</Button>
        </pre></li>

    )
}
const AnecdoteList = (props) => {
    let noteToShow = props.anecdot;//anecdotes;
    //console.log('noteToShow', noteToShow)
    if (props.filteredNotes !== '') noteToShow = props.filteredNotes; // only where onchange clicked(filter note) then show the result of the filtration

    return (
        <ul>
            {noteToShow.map(singleAnecdote =>
                <Note key={singleAnecdote.id}
                    note={singleAnecdote}
                    handleClick={() => {
                        props.vote(singleAnecdote);
                        props.showMsg(`You Voted for Blog: ${singleAnecdote.content}`);
                    }
                    }
                />
            )}
        </ul>
    )
}
const mapStateToProps = (state) => {
    return {
        anecdot: state.anecdot,
        filteredNotes: state.filteredNotes,
        msg: state.notofication
    }
}

const mapDispatchToProps = {
    showMsg,
    vote
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AnecdoteList)
