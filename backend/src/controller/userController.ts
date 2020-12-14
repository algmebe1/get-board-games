import { Request, Response } from 'express'
export {}

function userController (User: any) {
  function getMethod (req: Request, res: Response) {
    const { userId } = req.params
    const query = { id: userId }

    User.findOne(query, (error: any, currentUser: any) => {
      error ? res.send(error) : res.json(currentUser)
    })
  }

  function patchMethod (req: Request, res: Response) {
    const query = req.params.userId
    const body = req.body

    User.findByIdAndUpdate(query, body, { new: true }).populate('favourites').populate('events').exec(
      (error, user) => {
        error ? res.send(error) : res.json(user)
      }
    )
  }

  function postMethod (req: Request, res: Response) {
    const query = { id: req.body.id }

    User.findOneAndUpdate(query, req.body, { upsert: true, useFindAndModify: false }, (error: any, newUser: any) => {
      error ? res.send(error) : res.json(newUser)
    })
  }

  return { getMethod, patchMethod, postMethod }
}

module.exports = userController
