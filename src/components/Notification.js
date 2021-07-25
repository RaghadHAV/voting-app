import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { showMsg } from '../reducers/notificationReducer'

const Notification = ({msg}) => {
  const dispatch = useDispatch()
  const notification = useSelector(state => state.notofication)
  const style = {
    color: 'Green',
    padding: 10,  
  }
  // dispatch(showMsg('any notification'))
  return (
    <div style={style}>  
      {notification}
    </div>
  )
}

export default Notification