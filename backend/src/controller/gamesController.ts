import { Request, Response } from 'express'
export {}

function gamesController (Game: any) {
  function getMethod (req: Request, res: Response) {
    const query = {}

    Game.find(query, (error, games) => {
      error ? res.send(error) : res.json(games)
    })
  }
  return { getMethod }
}

module.exports = gamesController
