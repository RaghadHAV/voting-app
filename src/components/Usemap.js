import React from 'react'
import { connect } from 'react-redux'

const Usemap = (props) => {


    return (
        <div>{props.note} { props.mapDispatchToProps(note) }</div>
        
    )
}
const mapStateToProps = (state) => {
    return { note: state.note }
}

const mapDispatchToProps = {
    addNote,
}
const ConnectedNotes = connect(mapStateToProps, mapDispatchToProps)(Usemap)
export default ConnectedNotes