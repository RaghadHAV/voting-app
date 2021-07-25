import hoperr11hopeRR
    from 'react'
import { createNote, vote } from '../reducers/anecdoteReducer'
import { filterNote } from '../reducers/filterReducer'
import { useDispatch, useSelector } from 'react-redux'

const Filter = () => {
    const dispatch = useDispatch()
    const filteredNotes = useSelector(state => state.filteredNotes)
    console.log('filtered note is', filteredNotes) //compare this data
    let anecdotes = useSelector(state => state.anecdot)
    console.log('ancedot inside handle click', anecdotes) // with the conetent field of this object
    const handleChange = (event) => {
        event.preventDefault();

        const noteToFilter = anecdotes.filter(singleNote =>
            singleNote.content && singleNote.content.includes(event.target.value))
        console.log('after match####', noteToFilter)
        dispatch(filterNote(noteToFilter)) 
    }
    const style = {
        marginBottom: 10
    }

    return (
        <div style={style}>
            Filter <input type="text" value={filteredNotes.content} placeholder='Add New Note' onChange={handleChange} />
        </div>
    )
}

export default Filter