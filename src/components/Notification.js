import React from 'react'
import { connect } from 'react-redux'

const Notification = (props) => {
  const style = {
    color: 'Green',
    padding: 10,
  }
  return (
    <div style={style}>
      {props.msg}
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    msg: state.notofication, 
  }
}

const ConnectedNotes = connect(mapStateToProps)(Notification)
export default ConnectedNotes

// old version using hooks and timeout

// import React from 'react'
// import { connect } from 'react-redux'

// const Notification = (props) => {

//   console.log('render notification');

//   const [displayMsg, setDisplayMsg] = React.useState('')

//   React.useEffect(() => {
//     console.log('set message')
//     setDisplayMsg(props.msg);
    
//     const timer = setTimeout(() => {
//       console.log('clear message')
//       setDisplayMsg('')
//     }, 5000);

//     return () => { clearTimeout(timer); }
//   }, [props.msg]);

//   const style = {
//     color: 'Green',
//     padding: 10,
//   }
//   return (
//     <div style={style}>
//       {displayMsg}
//     </div>
//   )
// }
// const mapStateToProps = (state) => {
//   return {
//     msg: state.notofication,
//   }
// }
// const ConnectedNotes = connect(mapStateToProps)(Notification)
// export default ConnectedNotes