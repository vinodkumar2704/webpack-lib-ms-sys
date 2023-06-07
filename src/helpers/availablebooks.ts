import { BookInterface, Status } from '../types'

function getAvailableBooks() {
  const books: BookInterface[] = JSON.parse(
    localStorage.getItem('books') || ''
  ) as BookInterface[]
  const availableBooks = books.filter((el) => {
    return el.status === Status.AVAILABLE
  })
  const availableBooksData: {
    title: string
    key: string
    author: string
    isbn: number
  }[] = []

  for (const b of availableBooks) {
    availableBooksData.push({
      title: b.title,
      key: b.id,
      author: b.author,
      isbn: b.ISBN,
    })
  }
  return availableBooksData
}

export { getAvailableBooks }
