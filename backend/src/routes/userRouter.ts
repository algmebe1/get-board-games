export {}
const { Router } = require('express')
const userController = require('../controller/userController.ts')

function userRouter (User: any) {
  const router = Router()

  const user = userController(User)

  router.route('/')
    .post(user.postMethod)

  return router
}

module.exports = userRouter
