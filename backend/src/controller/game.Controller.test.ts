/* eslint-disable node/no-callback-literal */
const Game = require('../models/gameSchema')
const gameController = require('../controller/gameController')(Game)

jest.mock('../models/gameSchema')

describe('gameController getMethod', () => {
  describe('getMethod', () => {
    test('should call res.json without error', () => {
      const res = {
        json: jest.fn()
      }

      gameController.getMethod({ game: null }, res)

      expect(res.json).toHaveBeenCalled()
    })
  })
  describe('allMiddleware', () => {
    test('should call next function successfully', () => {
      const req = {
        params: { gameId: null }
      }

      Game.findOne = jest.fn().mockImplementationOnce((query, callback) => callback(false, {}))

      const next = jest.fn()

      gameController.allMiddleware(req, null, next)
      expect(next).toHaveBeenCalled()
    })

    test('should call next function with error', () => {
      const req = {
        params: { gameId: null }
      }

      const res = {
        send: jest.fn()
      }

      const next = jest.fn()

      Game.findOne = jest.fn().mockImplementationOnce((query, callback) => callback(true, null))

      gameController.allMiddleware(req, res, next)
      expect(res.send).toHaveBeenCalled()
    })
  })
})
