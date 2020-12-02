/* eslint-disable no-case-declarations */
import { debug } from 'react-native-reanimated'
import actionTypes from '../actions/actionTypes'

export default function gameReducer (state = {}, action: any) {
  switch (action.type) {
    case actionTypes.LOAD_GAME:
      const loadGameState = { ...state, gameObject: action.gameItem }
      return loadGameState
    case actionTypes.LOAD_GAME_ERROR:
      const loadGameError = { ...state, error: action.error }
      return loadGameError

    default:
      return state
  }
}
