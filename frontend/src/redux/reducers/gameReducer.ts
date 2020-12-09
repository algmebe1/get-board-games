/* eslint-disable no-case-declarations */
import actionTypes from '../actions/actionTypes'

export default function gameReducer (state = {}, action: any) {
  debugger
  switch (action.type) {
    case actionTypes.LOAD_GAME:
      const loadGameState = { ...state, gameObject: action.gameItem }
      return loadGameState
    case actionTypes.LOAD_GAME_ERROR:
      const loadGameError = { ...state, error: action.error }
      return loadGameError
    case actionTypes.LOAD_ALL_GAMES:
      const loadAllGamesState = { ...state, gameArray: action.gameCollection }
      return loadAllGamesState
    case actionTypes.LOAD_ALL_GAMES_ERROR:
      const loadAllGamesError = { ...state, error: action.error }
      return loadAllGamesError

    default:
      return state
  }
}
