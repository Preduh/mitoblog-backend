import { Request, Response } from 'express'
import { CreateMitinhoService } from './mitinho.create.service'
import { MitinhoPrismaRepository } from './repositories/MitinhoPrismaRepository'

export class MitinhoController {
  async create (
    request: Request,
    response: Response
  ): Promise<Response<any, Record<string, any>>> {
    const prismaRepository = new MitinhoPrismaRepository()
    const createMitinhoService = new CreateMitinhoService(prismaRepository)

    const { username, email, password } = request.body

    const result = await createMitinhoService.execute({
      email,
      password,
      username
    })

    if (result instanceof Error) return response.json({ error: result.message })

    return response.json(result)
  }
}
