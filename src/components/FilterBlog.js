
import { filterNote } from '../reducers/filterReducer'
import { connect } from 'react-redux'

const Filter = (props) => {

    const handleChange = (event) => {
        event.preventDefault();

        const noteToFilter = props.anecdot.filter(singleNote =>
            singleNote.content && singleNote.content.includes(event.target.value))

        console.log('noteToFilter', noteToFilter)
        props.filterNote(noteToFilter);
    }
    const style = {
        marginBottom: 10
    }

    return (
        <div style={style}>
            Filter <input type="text" value={props.filteredNotes.content} placeholder='Add New Note' onChange={handleChange} />
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        anecdot: state.anecdot,
        filteredNotes: state.filteredNotes,
    }
}

const mapDispatchToProps = {
    filterNote,
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Filter)
