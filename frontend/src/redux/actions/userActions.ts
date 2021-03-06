import axios from 'axios'
import actionTypes from './actionTypes'
import signInWithGoogle from '../../../firebase.js'
import { gameItemInterface, userObjectInterface, user } from '../../interfaces/interfaces'
import { Dispatch } from 'redux'

function loginGoogleSuccess (user: user) {
  return {
    type: actionTypes.LOGIN_USER_GOOGLE,
    user
  }
}

export function logoutUser (userObject: userObjectInterface) {
  return {
    type: actionTypes.LOGOUT_USER,
    userObject
  }
}

function loadUserSuccess (userItem: userObjectInterface) {
  return {
    type: actionTypes.LOAD_USER,
    userItem
  }
}

function sendUserSuccess (userItem: userObjectInterface) {
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

function updateFavourites (favouritesArray: userObjectInterface) {
  return {
    type: actionTypes.LOAD_FAVOURITES,
    favouritesArray
  }
}

export function loginGoogle () {
  return async (dispatch: Dispatch<any>) => {
    try {
      const { user } = await signInWithGoogle()
      dispatch(loginGoogleSuccess(user))
    } catch (error) {
      dispatch(loadError(error))
    }
  }
}

export function loadUser (userId: string) {
  return async (dispatch: Dispatch<any>) => {
    const endpoint = `http://192.168.1.51:7777/users/${userId}`
    try {
      const userItem = await axios.get(endpoint)
      dispatch(loadUserSuccess(userItem.data))
    } catch (error) {
      dispatch(loadError(error))
    }
  }
}

export function sendUser (userInfo: {id: string, name: string, photoUrl: string}) {
  return async (dispatch: Dispatch<any>) => {
    const endpoint = 'http://192.168.1.51:7777/users/'
    try {
      const userItem = await axios.post(endpoint, userInfo)
      dispatch(sendUserSuccess(userItem.data))
    } catch (error) {
      dispatch(loadError(error))
    }
  }
}

export function saveUserChanges (userId: string, userDetails: {username: string, location: string, bio: string }) {
  return async (dispatch: Dispatch<any>) => {
    const endpoint = `http://192.168.1.51:7777/users/${userId}`
    try {
      await axios.patch(endpoint, userDetails)
    } catch (error) {
      dispatch(loadError(error))
    }
  }
}

export function deleteGameFromFav (userObj: userObjectInterface, gameItem: gameItemInterface) {
  const newObj = { ...userObj }

  const gamePosition = newObj.favourites.findIndex(element => element.id === gameItem.id)
  newObj.favourites.splice(gamePosition, 1)
  return newObj
}

export function deleteGame (userObject: userObjectInterface, gameItem: gameItemInterface) {
  return async (dispatch: Dispatch<any>) => {
    const newObj = deleteGameFromFav(userObject, gameItem)
    const endpoint = `http://192.168.1.51:7777/users/deletefromfavourites/${newObj._id}`
    try {
      await axios.patch(endpoint, { favourites: newObj.favourites })
      dispatch(updateFavourites(newObj))
    } catch (error) {
      dispatch(loadError(error))
    }
  }
}
