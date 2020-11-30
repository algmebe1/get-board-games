export {}
const { Router } = require('express')
const gameController = require('../controller/gameController.ts')

function gameRouter (Game: any) {
  const router = Router()

  const game = gameController(Game)

  router.route('/:gameId')
    .all(game.allMiddleware)
    .get(game.getMethod)

  return router
}

module.exports = gameRouter
