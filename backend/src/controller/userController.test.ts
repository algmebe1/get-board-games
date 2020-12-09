const User = require('../models/userSchema')
const userController = require('../controller/userController')(User)

jest.mock('../models/userSchema')

describe('userController', () => {
  describe('postMethod', () => {
    test('should call res.json without error', () => {
      const req = { body: { id: '12345' } }
      const res = {
        json: jest.fn()
      }

      User.findOneAndUpdate = jest.fn().mockImplementationOnce((query, body, options, callback) => {
        callback(false, {})
      })

      userController.postMethod(req, res)
      expect(res.json).toHaveBeenCalled()
    })
    test('should call res.send without due to an error', () => {
      const req = { body: { id: '12345' } }
      const res = {
        send: jest.fn()
      }

      User.findOneAndUpdate = jest.fn().mockImplementationOnce((query, body, options, callback) => {
        callback(true, {})
      })

      userController.postMethod(req, res)
      expect(res.send).toHaveBeenCalled()
    })
  })
})
