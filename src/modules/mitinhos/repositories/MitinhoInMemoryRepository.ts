import {
  IMitinhoRepository,
  MitinhoCreate,
  MitinhoSave
} from './IMitinhoRepository'
import { randomUUID } from 'crypto'

export class MitinhoInMemoryRepository implements IMitinhoRepository {
  mitinhos: any[] = []

  async save (data: MitinhoCreate): Promise<MitinhoSave> {
    const mitinho: MitinhoSave = {
      id: randomUUID(),
      ...data,
      created_at: new Date(),
      updated_at: new Date()
    }

    this.mitinhos.push(mitinho)

    return mitinho
  }
}
