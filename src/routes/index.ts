import { Router } from 'express'
import { mitinhoRouter } from '../modules/mitinhos/routes'

const router = Router()

router.use('/mitinho', mitinhoRouter)

export { router }
