import axios from 'axios'
import actionTypes from './actionTypes'
import signInWithGoogle from '../../../firebase.js'

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

function loggingGoogleSuccess (user: Object) {
  return {
    type: actionTypes.LOGIN_USER_GOOGLE,
    user
  }
}

function loggingGoogleError (error: any) {
  return {
    type: actionTypes.LOGIN_USER_GOOGLE_ERROR,
    error
  }
}

export function loginGoogle () {
  return async (dispatch: Function) => {
    try {
      const { user } = await signInWithGoogle()
      console.log(user)
      dispatch(loggingGoogleSuccess(user))
    } catch (error) {
      dispatch(loggingGoogleError(error))
    }
  }
}

export function sendUser (userInfo) {
  return async (dispatch: Function) => {
    const endpoint = 'http://192.168.0.21:7777/users/'
    try {
      const userItem = await axios.post(endpoint, userInfo)
      dispatch(sendUserSuccess(userItem.data))
    } catch (error) {
      dispatch(sendUserError(error))
    }
  }
}
