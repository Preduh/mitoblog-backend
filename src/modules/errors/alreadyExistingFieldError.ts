export class AlreadyExistingFieldError extends Error {
  constructor (fieldName: string) {
    super(`This ${fieldName} already exists`)
    this.name = 'AlreadyExistingFieldError'
  }
}
