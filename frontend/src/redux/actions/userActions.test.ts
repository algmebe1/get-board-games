import axios from 'axios'
import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'
import * as userActions from './userActions'
import actionTypes from './actionTypes'
import signInWithGoogle from '../../../firebase.js'

const mockStore = configureMockStore([thunk])

jest.mock('axios')
jest.mock('../../../firebase.js')

describe('userActions', () => {
  describe('sendUser function should be called with a promise...', () => {
    let testData = null
    let store = null

    beforeEach(() => {
      testData = { user: 'Skylab mola!' }
      store = mockStore()
    })

    afterEach(() => {
      jest.resetAllMocks()
    })

    test('resolved and call axios.post function', async () => {
      const userId = '12345'
      axios.post = jest.fn().mockResolvedValueOnce(testData)
      await store.dispatch(userActions.sendUser(userId))

      expect(store.getActions()[0].type).toBe(actionTypes.SEND_USER)
    })
    test('resolved and call loadError function', async () => {
      const userId = null
      axios.post = jest.fn().mockRejectedValueOnce(testData)
      await store.dispatch(userActions.sendUser(userId))

      expect(store.getActions()[0].type).toBe(actionTypes.LOAD_ERROR)
    })
  })
  describe('loadUser function should be called with a promise...', () => {
    let testData = null
    let store = null

    beforeEach(() => {
      testData = { user: 'Skylab mola!' }
      store = mockStore()
    })

    afterEach(() => {
      jest.resetAllMocks()
    })

    test('resolved and call axios.get function', async () => {
      const userId = '12345'
      axios.get = jest.fn().mockResolvedValueOnce(testData)
      await store.dispatch(userActions.loadUser(userId))

      expect(store.getActions()[0].type).toBe(actionTypes.LOAD_USER)
    })
    test('rejected and call loadError function', async () => {
      const userId = null
      axios.get = jest.fn().mockRejectedValueOnce(testData)
      await store.dispatch(userActions.loadUser(userId))

      expect(store.getActions()[0].type).toBe(actionTypes.LOAD_ERROR)
    })
  })
  describe('saveUserChanges function should be called with a promise...', () => {
    let testData = null
    let store = null

    beforeEach(() => {
      testData = { bio: 'Skylab mola!' }
      store = mockStore()
    })

    afterEach(() => {
      jest.resetAllMocks()
    })

    test('resolved and call axios.patch function', async () => {
      const userId = '12345'
      const userDetails = { bio: 'Skylab mola!' }
      const endpoint = 'http://192.168.0.21:7777/users/12345'
      axios.patch = jest.fn()

      await store.dispatch(userActions.saveUserChanges(userId, userDetails))

      expect(axios.patch).toHaveBeenCalledWith(endpoint, userDetails)
    })
    test('rejected and call loadError function', async () => {
      const userId = null
      axios.patch = jest.fn().mockRejectedValueOnce(testData)
      await store.dispatch(userActions.saveUserChanges(userId))

      expect(store.getActions()[0].type).toBe(actionTypes.LOAD_ERROR)
    })
  })

  describe('loginGoogle function should be called with a promise...', () => {
    const testData = null
    let store = null

    beforeEach(() => {
      store = mockStore()
    })

    afterEach(() => {
      jest.resetAllMocks()
    })

    test('resolved and call login function', async () => {
      signInWithGoogle.mockResolvedValueOnce({ user: null })
      await store.dispatch(userActions.loginGoogle())
      expect(store.getActions()[0].type).toBe(actionTypes.LOGIN_USER_GOOGLE)
    })

    test('rejected and call loadError function', async () => {
      signInWithGoogle.mockRejectedValueOnce({ user: null })
      await store.dispatch(userActions.loginGoogle())
      expect(store.getActions()[0].type).toBe(actionTypes.LOAD_ERROR)
    })
  })
  describe('logout function should be called...', () => {
    let store = null
    let testData = null

    beforeEach(() => {
      store = mockStore()
      testData = { name: 'Skylab mola!' }
    })

    afterEach(() => {
      jest.resetAllMocks()
    })

    test('without issues', () => {
      const userObject = { id: '12345' }
      const resultObject =
      {
        type: actionTypes.LOGOUT_USER,
        userObject
      }

      const logoutResult = userActions.logoutUser(userObject)
      expect(logoutResult).toEqual(resultObject)
    })
  })
})
