const notificationReducer = (state = '', action) => {
    switch (action.type) {
      case 'Notify':
        return action.msg
      default:
        return state
    }
  }

export const showMsg = (msg) => {
    return ({
      type: 'Notify',
      msg, msg
    })
  }

export default notificationReducer