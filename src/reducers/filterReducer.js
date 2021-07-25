import React from 'react'
import { useSelector } from 'react-redux'

//const filterReducer1 =  useSelector(state => state.anecdot);
const filterReducer = (state= '', action) => {

  console.log('filter called')
  switch (action.type) {
    case 'filter': {
      console.log('inside the reducer', action.data)
      state = action.data;
      console.log('the stat is', state)
      return state;
    }
    default:
      return state
  }
}

export const filterNote = (value) => {
  value.map(v => { console.log('the value recived at filter not reducer is ', v.content) })
  return ({
    type: 'filter',
    data: value
  })
}

export default filterReducer