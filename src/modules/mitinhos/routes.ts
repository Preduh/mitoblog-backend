import { Router } from 'express'
import { MitinhoController } from './mitinho.controller'

const mitinhoRouter = Router()

const mitinhoController = new MitinhoController()

mitinhoRouter.post('/register', mitinhoController.create)

export { mitinhoRouter }
