/* eslint-disable no-debugger */
import actionTypes from './actionTypes'
import axios from 'axios'

function requestGameSuccess (gameItem: Object) {
  return {
    type: actionTypes.LOAD_GAME,
    gameItem
  }
}

function requestGameError (error: any) {
  return {
    type: actionTypes.LOAD_GAME_ERROR,
    error
  }
}

export function requestGame (gameId: string) {
  return async (dispatch: Function) => {
    const endpoint = `http://192.168.0.21:7777/games/${gameId}`
    try {
      const gameItem = await axios.get(endpoint)
      dispatch(requestGameSuccess(gameItem.data))
    } catch (error) {
      dispatch(requestGameError(error))
    }
  }
}