import actionTypes from './actionTypes'
import axios from 'axios'
import { gameItemInterface, userObjectInterface } from '../../interfaces/interfaces'

function requestGameSuccess (gameItem: gameItemInterface) {
  return {
    type: actionTypes.LOAD_GAME,
    gameItem
  }
}

export function requestAllGamesSuccess (gameCollection: {id: string, name: string}[]) {
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
    const endpoint = `http://192.168.1.36:7777/games/${gameId}`
    try {
      const gameItem = await axios.get(endpoint)
      dispatch(requestGameSuccess(gameItem.data))
    } catch (error) {
      dispatch(loadError(error))
    }
  }
}

export function requestAllGames () {
  return async (dispatch: Function) => {
    const endpoint = 'http://192.168.1.36:7777/games/'
    try {
      const gameCollection = await axios.get(endpoint)
      dispatch(requestAllGamesSuccess(gameCollection.data))
    } catch (error) {
      dispatch(loadError(error))
    }
  }
}

export function addGameToFav (userObj: userObjectInterface, gameItem: gameItemInterface) {
  const newObj = { ...userObj }

  if (newObj.favourites.length < 3) {
    newObj.favourites.push(gameItem)
  }
  return newObj
}

export function addGame (userObject: userObjectInterface, gameItem: gameItemInterface) {
  return async (dispatch: Function) => {
    const newObj = addGameToFav(userObject, gameItem)
    const endpoint = `http://192.168.1.36:7777/users/favourites/${newObj.id}`
    try {
      await axios.patch(endpoint, { favourites: newObj.favourites })
    } catch (error) {
      dispatch(loadError(error))
    }
  }
}
