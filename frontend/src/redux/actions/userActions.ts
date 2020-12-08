import axios from 'axios'
import actionTypes from './actionTypes'

function sendUserSuccess (userItem: Object) {
  return {
    type: actionTypes.SEND_USER,
    userItem
  }
}

function sendUserError (error: any) {
  return {
    type: actionTypes.SEND_USER_ERROR,
    error
  }
}

export function sendUser (userInfo) {
  return async (dispatch: Function) => {
    const endpoint = 'http://192.168.0.21:7777/users/'
    try {
      const userItem = await axios.post(endpoint, userInfo)
      dispatch(sendUserSuccess(userItem))
    } catch (error) {
      dispatch(sendUserError(error))
    }
  }
}
