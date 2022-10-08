import {
  IMitinhoRepository,
  MitinhoCreate,
  MitinhoSave
} from './IMitinhoRepository'
import { randomUUID } from 'crypto'

export class MitinhoInMemoryRepository implements IMitinhoRepository {
  mitinhos: MitinhoSave[] = []

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

  async findByUsername (username: string): Promise<MitinhoSave | null> {
    const mitinho = this.mitinhos.find(
      (mitinho) => mitinho.username === username
    )

    if (mitinho !== undefined) return mitinho
    return null
  }

  async findByEmail (email: string): Promise<MitinhoSave | null> {
    const mitinho = this.mitinhos.find(
      (mitinho) => mitinho.email === email
    )

    if (mitinho !== undefined) return mitinho
    return null
  }
}
