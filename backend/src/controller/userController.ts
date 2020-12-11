import { Request, Response } from 'express'
export {}

function userController (User: any) {
  function postMethod (req: Request, res: Response) {
    const query = { id: req.body.id }

    User.findOneAndUpdate(query, req.body, { upsert: true, useFindAndModify: false }, (error: any, newUser: any) => {
      error ? res.send(error) : res.json(newUser)
    })
  }

  return { postMethod }
}

module.exports = userController
