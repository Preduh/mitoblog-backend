import { prismaClient } from '../../../database/client'
import { IMitinhoRepository, MitinhoCreate, MitinhoSave } from './IMitinhoRepository'

export class MitinhoPrismaRepository implements IMitinhoRepository {
  async save (data: MitinhoCreate): Promise<MitinhoSave> {
    const mitinho = await prismaClient.mitinhos.create({
      data
    })

    return mitinho
  }

  async findByUsername (username: string): Promise<MitinhoSave | null> {
    const mitinho: MitinhoSave | null = await prismaClient.mitinhos.findFirst({
      where: {
        username
      }
    })

    return mitinho
  }

  async findByEmail (email: string): Promise<MitinhoSave | null> {
    const mitinho: MitinhoSave | null = await prismaClient.mitinhos.findFirst({
      where: {
        email
      }
    })

    return mitinho
  }
}
