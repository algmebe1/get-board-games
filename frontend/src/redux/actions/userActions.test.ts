import axios from 'axios'
import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'
import * as userActions from './userActions'
import actionTypes from './actionTypes'

const mockStore = configureMockStore([thunk])

jest.mock('axios')

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
    test('resolved and call axios.post function', async () => {
      const userId = null
      axios.post = jest.fn().mockRejectedValueOnce(testData)
      await store.dispatch(userActions.sendUser(userId))

      expect(store.getActions()[0].type).toBe(actionTypes.LOAD_ERROR)
    })
  })
})
