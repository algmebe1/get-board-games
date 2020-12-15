/* eslint-disable no-debugger */
import actionTypes from './actionTypes'
import axios from 'axios'

function requestGameSuccess (gameItem: Object) {
  return {
    type: actionTypes.LOAD_GAME,
    gameItem
  }
}

export function requestAllGamesSuccess (gameCollection: Array) {
  gameCollection.sort((a: any, b:any) => a.rank - b.rank)

  return {
    type: actionTypes.LOAD_ALL_GAMES,
    gameCollection
  }
}

function loadError (error: any) {
  return {
    type: actionTypes.LOAD_ERROR,
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
      dispatch(loadError(error))
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
      dispatch(loadError(error))
    }
  }
}

export function addGameToFav (userObj, gameItem) {
  const newObj = { ...userObj }

  if (newObj.favourites.length < 4) {
    newObj.favourites.push(gameItem)
  }
  return newObj
}

export function addGame (userObject: Object, gameItem: Object) {
  return async (dispatch: Function) => {
    const newObj = addGameToFav(userObject, gameItem)
    const endpoint = `http://192.168.0.21:7777/users/favourites/${newObj.id}`
    try {
      const objectUpdated = await axios.patch(endpoint, { favourites: newObj.favourites })
      console.log(objectUpdated)
    } catch (error) {
      dispatch(loadError(error))
    }
  }
}
