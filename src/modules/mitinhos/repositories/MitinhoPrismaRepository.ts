import { prismaClient } from '../../../database/client'
import { IMitinhoRepository, MitinhoCreate, MitinhoSave } from './IMitinhoRepository'

export class MitinhoPrismaRepository implements IMitinhoRepository {
  async save (data: MitinhoCreate): Promise<MitinhoSave> {
    const mitinho = await prismaClient.mitinhos.create({
      data
    })

    return mitinho
  }
}
