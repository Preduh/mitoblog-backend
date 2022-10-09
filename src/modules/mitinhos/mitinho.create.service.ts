import { AlreadyExistingFieldError } from '../errors/alreadyExistingFieldError'
import { MissingParamError } from '../errors/missingParamError'
import { IMitinhoRepository, MitinhoCreate, MitinhoSave } from './repositories/IMitinhoRepository'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export interface Result {
  mitinho: MitinhoSave
  token: string
}

export class CreateMitinhoService {
  constructor (private readonly mitinhoRepository: IMitinhoRepository) {}

  async execute (data: MitinhoCreate): Promise<Result | Error> {
    if (!data.username) return new MissingParamError('username')

    const usernameAlreadyExists = await this.mitinhoRepository.findByUsername(data.username)
    if (usernameAlreadyExists) return new AlreadyExistingFieldError('username')

    const emailAlreadyExists = await this.mitinhoRepository.findByEmail(data.email)
    if (emailAlreadyExists) return new AlreadyExistingFieldError('email')

    const hashedPassword = await bcrypt.hash(data.password, 10)

    const mitinhoCreated = await this.mitinhoRepository.save({
      username: data.username,
      email: data.email,
      password: hashedPassword
    })

    const tokenKey = process.env.VITE_TOKEN_KEY as string

    const token = jwt.sign({ id: mitinhoCreated.id }, tokenKey, {
      expiresIn: '24h'
    })

    return { mitinho: mitinhoCreated, token }
  }
}
