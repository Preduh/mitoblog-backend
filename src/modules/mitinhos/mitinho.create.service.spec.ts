import { describe, it, expect } from 'vitest'
import { CreateMitinhoService } from './mitinho.create.service'
import { MitinhoInMemoryRepository } from './repositories/MitinhoInMemoryRepository'
import { MitinhoCreate } from './repositories/IMitinhoRepository'

describe('Create Mitinho', () => {
  it('Should be able create a new mitinho', async () => {
    const mitinhoInMemoryRepository = new MitinhoInMemoryRepository()
    const createMitinhoService = new CreateMitinhoService(mitinhoInMemoryRepository)

    const mitinho: MitinhoCreate = {
      username: 'any_username',
      email: 'any_email',
      password: 'any_password'
    }

    const result = await createMitinhoService.execute(mitinho)

    expect(result).toHaveProperty('id')
  })
})
