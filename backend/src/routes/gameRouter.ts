export {}
const { Router } = require('express')
const gameController = require('../controller/gameController.ts')
const gamesController = require('../controller/gamesController.ts')

function gameRouter (Game: any) {
  const router = Router()
  const game = gameController(Game)
  const games = gamesController(Game)

  router.route('/')
    .get(games.getMethod)

  router.route('/:gameId')
    .all(game.allMiddleware)
    .get(game.getMethod)

  return router
}

module.exports = gameRouter
