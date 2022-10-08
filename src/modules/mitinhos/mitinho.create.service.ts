import { AlreadyExistingFieldError } from '../errors/alreadyExistingFieldError'
import { IMitinhoRepository, MitinhoCreate, MitinhoSave } from './repositories/IMitinhoRepository'

export class CreateMitinhoService {
  constructor (private readonly mitinhoRepository: IMitinhoRepository) {}

  async execute (data: MitinhoCreate): Promise<MitinhoSave | Error> {
    const usernameAlreadyExists = await this.mitinhoRepository.findByUsername(data.username)

    if (usernameAlreadyExists) return new AlreadyExistingFieldError('username')

    const mitinhoCreated = await this.mitinhoRepository.save(data)

    return mitinhoCreated
  }
}
