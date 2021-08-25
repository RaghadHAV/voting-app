const notificationReducer = (state = '', action) => {
  switch (action.type) {
    case 'Notify':
      return action.msg;
    default:
      return state;
  }
}

let timerID = undefined;

export const showMsg = (msg) => {
  return (dispatch) => {
    if (timerID) clearTimeout(timerID);
    timerID = setTimeout(() => {
      dispatch({ type: 'Notify', msg: '' })
    }, 5000);
    return dispatch({ type: 'Notify', msg })
  };
}

export default notificationReducer