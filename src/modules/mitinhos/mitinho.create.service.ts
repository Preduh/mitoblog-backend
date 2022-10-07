import { IMitinhoRepository, MitinhoCreate, MitinhoSave } from './repositories/IMitinhoRepository'

export class CreateMitinhoService {
  constructor (private readonly mitinhoRepository: IMitinhoRepository) {}

  async execute (data: MitinhoCreate): Promise<MitinhoSave> {
    const mitinhoCreated = await this.mitinhoRepository.save(data)

    return mitinhoCreated
  }
}
