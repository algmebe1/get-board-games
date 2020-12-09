import { Request, Response, NextFunction } from 'express'
export {}

function gameController (Game: any) {
  function allMiddleware (req: Request, res: Response, next: NextFunction) {
    console.log(req)
    const { gameId } = req.params
    const query = { id: gameId }
    Game.findOne(query, (errorFindGame: any, game: Object) => {
      if (game) {
        req.game = game
        next()
      } else {
        res.send(errorFindGame)
      }
    })
  }

  function getMethod (req: Request, res: Response) {
    res.json(req.game)
  }

  return { allMiddleware, getMethod }
}

module.exports = gameController
