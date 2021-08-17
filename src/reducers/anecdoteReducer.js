import { useDispatch } from 'react-redux'
import noteService from '../services/fetchnotes'

const anecdoteReducer = (state = [], action) => {

  switch (action.type) {
    case 'inc':
      for (let i = 0; i < state.length; i++) {
        if (state[i].id === action.data.id) {
          state[i].votes++;
        }
      }
      state = [...state];
      state.sort((a, b) => b.votes - a.votes);
      return state;
    case 'create': {
      state = [...state, action.data];
      state.sort((a, b) => b.votes - a.votes);
      return state;
    }
    case 'init-note': 
      return action.data.sort((a, b) => b.votes - a.votes);
    case 'msg': {
      state = [...state, action.noti];
      return state;
    }
  }
  return state
}

export const createNote = (content) => {
  return async dispatch => {
    const newNote = await noteService.createNew(content)
    dispatch({
      type: 'create',
      data: newNote
    })
  }
}
export const vote = (sentObj) => {

  return async dispatch => {
    const obj = {
      id: sentObj.id,
      votes: sentObj.votes + 1,
      content: sentObj.content
    }
    console.log('the new ob of votes is', obj)
    const newNote = await noteService.update(obj.id, obj)
    dispatch({
      type: 'inc',
      data: obj
    })
  }
}
export const initializeNotes = () => {
  return async dispatch => {
    const notes = await noteService.getAll()
    dispatch({ 
      type: 'init-note',
      data: notes,
    })
  }
}
export default anecdoteReducer