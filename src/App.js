import React, { useEffect } from 'react'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Notification from './components/Notification'
import FilterBlog from './components/FilterBlog'
import noteService from './services/fetchnotes'
// import Usemap from './components/Usemap'
import anecdoteReducer, { initializeNotes } from './reducers/anecdoteReducer'
import { useDispatch } from 'react-redux'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
      dispatch(initializeNotes())
  }, [dispatch])

  return (
    <div>
      <h2 className='voteClass'>Voting App</h2>
      <Notification />
      <FilterBlog />
      <AnecdoteForm />
      <AnecdoteList />
      {/* <Usemap/> */}
    </div>
  )
}

export default App