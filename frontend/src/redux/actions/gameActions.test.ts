import axios from 'axios'
import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'
import * as gameActions from './gameActions'
import actionTypes from './actionTypes'

const mockStore = configureMockStore([thunk])

jest.mock('axios')

describe('gameActions', () => {
  describe('requestGame function should be called with a promise...', () => {
    let testData = null
    let store = null

    beforeEach(() => {
      testData = { data: 'Skylab mola!' }
      store = mockStore()
    })

    afterEach(() => {
      jest.resetAllMocks()
    })

    test('resolved and return an object with property data', async () => {
      const gameId = '12345'

      axios.get = jest.fn().mockResolvedValueOnce(testData)
      await store.dispatch(gameActions.requestGame(gameId))
      expect(store.getActions()[0].type).toBe(actionTypes.LOAD_GAME)
    })
    test('rejected and return an error', async () => {
      const gameId = null

      axios.get = jest.fn().mockRejectedValueOnce(testData)
      await store.dispatch(gameActions.requestGame(gameId))
      expect(store.getActions()[0].type).toBe(actionTypes.LOAD_ERROR)
    })
  })

  describe('requestAllGames function should be called with a promise...', () => {
    let testData = null
    let store = null

    beforeEach(() => {
      testData = { data: [{ name: 'Skylab mola!' }] }
      store = mockStore()
    })

    afterEach(() => {
      jest.resetAllMocks()
    })

    test('resolved an return an object with property data', async () => {
      axios.get = jest.fn().mockResolvedValueOnce(testData)
      await store.dispatch(gameActions.requestAllGames())
      expect(store.getActions()[0].type).toBe(actionTypes.LOAD_ALL_GAMES)
    })

    test('resolved an return an object with property data', async () => {
      axios.get = jest.fn().mockRejectedValueOnce(testData)
      await store.dispatch(gameActions.requestAllGames())
      expect(store.getActions()[0].type).toBe(actionTypes.LOAD_ERROR)
    })
  })

  describe('requestAllGamesSuccess', () => {
    test('should order ranking from highest to lowest', () => {
      const gameCollection = [{ rank: 2 }, { rank: 1 }]

      const result = gameActions.requestAllGamesSuccess(gameCollection)
      expect(result.gameCollection).toEqual([{ rank: 1 }, { rank: 2 }])
    })
  })
})
