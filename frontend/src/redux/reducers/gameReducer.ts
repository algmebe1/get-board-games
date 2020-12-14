/* eslint-disable no-case-declarations */
import actionTypes from '../actions/actionTypes'

export default function gameReducer (state = {}, action: any) {
  debugger
  switch (action.type) {
    case actionTypes.LOAD_GAME:
      const loadGameState = { ...state, gameObject: action.gameItem }
      return loadGameState
    case actionTypes.LOAD_ALL_GAMES:
      const loadAllGamesState = { ...state, gameArray: action.gameCollection }
      return loadAllGamesState
    case actionTypes.LOAD_ERROR:
      const loadError = { ...state, error: action.error }
      return loadError

    default:
      return state
  }
}
