export interface MitinhoCreate {
  username: string
  email: string
  password: string
}

export interface MitinhoSave {
  id: string
  username: string
  email: string
  password: string
  created_at: Date
  updated_at: Date
}

export interface IMitinhoRepository {
  save: (data: MitinhoCreate) => Promise<MitinhoSave>
  findByUsername: (username: string) => Promise<MitinhoSave | null>
  findByEmail: (email: string) => Promise<MitinhoSave | null>
}
