import { Router } from 'express'

const authRouter = Router()

authRouter.get('/', (req, res) => {
  res.json({ message: 'This route is ok!' })
})

export { authRouter }
