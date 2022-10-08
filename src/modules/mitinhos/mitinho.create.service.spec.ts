import { describe, it, expect } from 'vitest'
import { CreateMitinhoService } from './mitinho.create.service'
import { MitinhoInMemoryRepository } from './repositories/MitinhoInMemoryRepository'
import { MitinhoCreate } from './repositories/IMitinhoRepository'
import { AlreadyExistingFieldError } from '../errors/alreadyExistingFieldError'

describe('Create Mitinho', () => {
  it('Should be able to create a new mitinho', async () => {
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

  it('Should not be able to create a new mitinho if username already exists', async () => {
    const mitinhoInMemoryRepository = new MitinhoInMemoryRepository()
    const createMitinhoService = new CreateMitinhoService(mitinhoInMemoryRepository)

    const firstMitinho: MitinhoCreate = {
      username: 'any_username',
      email: 'any_email',
      password: 'any_password'
    }

    await createMitinhoService.execute(firstMitinho)

    const secondMitinho: MitinhoCreate = {
      username: 'any_username',
      email: 'other_email',
      password: 'other_password'
    }

    const result = await createMitinhoService.execute(secondMitinho)

    expect(result).toEqual(new AlreadyExistingFieldError('username'))
  })

  it('Should not be able to create a new mitinho if email already exists', async () => {
    const mitinhoInMemoryRepository = new MitinhoInMemoryRepository()
    const createMitinhoService = new CreateMitinhoService(mitinhoInMemoryRepository)

    const firstMitinho: MitinhoCreate = {
      username: 'any_username',
      email: 'any_email',
      password: 'any_password'
    }

    await createMitinhoService.execute(firstMitinho)

    const secondMitinho: MitinhoCreate = {
      username: 'other_username',
      email: 'any_email',
      password: 'other_password'
    }

    const result = await createMitinhoService.execute(secondMitinho)

    expect(result).toEqual(new AlreadyExistingFieldError('email'))
  })
})
