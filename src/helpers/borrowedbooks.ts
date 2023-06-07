import { BookInterface, Status } from '../types'
const lib_data: BookInterface[] = [
  {
    title: 'math',
    author: 'john',
    ISBN: 1234,
    id: '1',
    owner: null,
    status: Status.AVAILABLE,
  },
  {
    title: 'physics',
    author: 'salman',
    ISBN: 1235,
    id: '2',
    owner: 'q',
    status: Status.BORROWED,
  },
  {
    title: 'chem',
    author: 'vijay',
    ISBN: 1236,
    id: '3',
    owner: null,
    status: Status.AVAILABLE,
  },
  {
    title: 'gravity',
    author: 'nbk',
    ISBN: 1237,
    id: '4',
    owner: 'boya',
    status: Status.BORROWED,
  },
]
localStorage.setItem('books', JSON.stringify(lib_data))

function getBorrowedBooksData(id: string) {
  const books: BookInterface[] = JSON.parse(
    localStorage.getItem('books') || ''
  ) as BookInterface[]
  console.log(books)
  const borrowedBooks: BookInterface[] = books.filter((el) => {
    return el.status === Status.BORROWED && el.owner === id
  })
  const borrowedBooksData: {
    title: string
    key: string
    author: string
    isbn: number
  }[] = []

  for (const b of borrowedBooks) {
    borrowedBooksData.push({
      title: b.title,
      key: b.id,
      author: b.author,
      isbn: b.ISBN,
    })
  }
  return borrowedBooksData
}

export { getBorrowedBooksData }
