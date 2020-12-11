/* eslint-disable no-case-declarations */
import actionTypes from '../actions/actionTypes'

export default function userReducer (state = {}, action: any):any {
  let newState
  switch (action.type) {
    case actionTypes.SEND_USER:
      newState = { ...state, userObject: action.userItem }
      break

    case actionTypes.SEND_USER_ERROR:
      newState = { ...state, error: action.error }
      break
    case actionTypes.LOGIN_USER_GOOGLE:
      newState = { ...state, user: action.user }
      break

    case actionTypes.LOGIN_USER_GOOGLE_ERROR:
      newState = { ...state, error: action.error }
      break

    default:
      newState = state
  }
  return newState
}
