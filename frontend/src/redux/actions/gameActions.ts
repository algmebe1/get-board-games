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

export function requestAllGamesSuccess (gameCollection: Array) {
  // gameCollection.sort(function (a: any, b: any) {
  //   if (a.rank > b.rank) {
  //     return 1
  //   }
  //   if (a.rank < b.rank) {
  //     return -1
  //   }
  //   return 0
  // })
  gameCollection.sort((a: any, b:any) => a.rank - b.rank)

  return {
    type: actionTypes.LOAD_ALL_GAMES,
    gameCollection
  }
}

function requestAllGamesError (error: any) {
  return {
    type: actionTypes.LOAD_ALL_GAMES_ERROR,
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

export function requestAllGames () {
  debugger
  return async (dispatch: Function) => {
    const endpoint = 'http://192.168.0.21:7777/games/'
    try {
      debugger
      const gameCollection = await axios.get(endpoint)
      debugger
      dispatch(requestAllGamesSuccess(gameCollection.data))
    } catch (error) {
      dispatch(requestAllGamesError(error))
    }
  }
}
