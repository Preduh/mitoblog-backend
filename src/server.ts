import express from 'express'
import { router } from './routes'
import dotenv from 'dotenv'

const app = express()

dotenv.config()
app.use(express.json())
app.use(router)

app.listen(process.env.PORT ?? 8080, () => console.log('Server is running'))
