import axios from 'axios'
import actionTypes from './actionTypes'
import signInWithGoogle from '../../../firebase.js'

function loginGoogleSuccess (user: Object) {
  return {
    type: actionTypes.LOGIN_USER_GOOGLE,
    user
  }
}

export function logoutUser (userObject: Object) {
  return {
    type: actionTypes.LOGOUT_USER,
    userObject
  }
}

function loadUserSuccess (userItem: Object) {
  return {
    type: actionTypes.LOAD_USER,
    userItem
  }
}

function sendUserSuccess (userItem: Object) {
  return {
    type: actionTypes.SEND_USER,
    userItem
  }
}

function loadError (error: any) {
  return {
    type: actionTypes.LOAD_ERROR,
    error
  }
}

export function loginGoogle () {
  return async (dispatch: Function) => {
    try {
      const { user } = await signInWithGoogle()
      dispatch(loginGoogleSuccess(user))
    } catch (error) {
      dispatch(loadError(error))
    }
  }
}

export function loadUser (userId: Object) {
  return async (dispatch: Function) => {
    const endpoint = `http://192.168.0.21:7777/users/${userId}`
    try {
      const userItem = await axios.get(endpoint)
      dispatch(loadUserSuccess(userItem.data))
    } catch (error) {
      dispatch(loadError(error))
    }
  }
}

export function sendUser (userInfo: Object) {
  return async (dispatch: Function) => {
    const endpoint = 'http://192.168.0.21:7777/users/'
    try {
      const userItem = await axios.post(endpoint, userInfo)
      dispatch(sendUserSuccess(userItem.data))
    } catch (error) {
      dispatch(loadError(error))
    }
  }
}

export function saveUserChanges (userId: Object, userDetails: Object) {
  return async (dispatch: Function) => {
    const endpoint = `http://192.168.0.21:7777/users/${userId}`
    try {
      const userItem = await axios.patch(endpoint, userDetails)
      console.log((userItem))
    } catch (error) {
      dispatch(loadError(error))
    }
  }
}
