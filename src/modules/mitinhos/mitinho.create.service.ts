import { AlreadyExistingFieldError } from '../errors/alreadyExistingFieldError'
import { IMitinhoRepository, MitinhoCreate, MitinhoSave } from './repositories/IMitinhoRepository'

export class CreateMitinhoService {
  constructor (private readonly mitinhoRepository: IMitinhoRepository) {}

  async execute (data: MitinhoCreate): Promise<MitinhoSave | Error> {
    const usernameAlreadyExists = await this.mitinhoRepository.findByUsername(data.username)
    if (usernameAlreadyExists) return new AlreadyExistingFieldError('username')

    const emailAlreadyExists = await this.mitinhoRepository.findByEmail(data.email)
    if (emailAlreadyExists) return new AlreadyExistingFieldError('email')

    const mitinhoCreated = await this.mitinhoRepository.save(data)

    return mitinhoCreated
  }
}
