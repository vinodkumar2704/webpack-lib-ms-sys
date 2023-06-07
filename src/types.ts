enum Status {
  AVAILABLE,
  BORROWED,
}

interface BookInterface {
  title: string
  author: string
  ISBN: number
  id: string
  owner?: string | null
  status: Status
}

export { Status }
export type { BookInterface }
