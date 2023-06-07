import { Link, useNavigate } from 'react-router-dom'
import { Button, Table } from 'antd'
import { useCallback, useContext, useState } from 'react'
import { getBorrowedBooksData } from './helpers/borrowedbooks'
import { ColumnsType } from 'antd/es/table'
import { BookInterface, Status } from './types'
import { ContextProvider } from './context'

const Home = () => {
  const navigate = useNavigate()
  const handleLogout = () => {
    localStorage.removeItem('logstate')
    location.reload()
    navigate('/')
  }

  const cachedCallback = useCallback(
    (id: string) => getBorrowedBooksData(id),
    []
  )
  const [borrowedBooks, setBorrowedBooks] = useState(cachedCallback(''))
  const contextValue = useContext(ContextProvider)
  if (!contextValue) {
    return null
  }

  const { isLogin } = contextValue
  setBorrowedBooks(cachedCallback(isLogin.id as string))

  function returnBook(title: string) {
    const books: BookInterface[] = JSON.parse(
      localStorage.getItem('books') || ''
    ) as BookInterface[]
    const foundBook = books.find((b: BookInterface) => b.title === title)
    if (foundBook) {
      foundBook.owner = null
      foundBook.status = Status.AVAILABLE
    }
    localStorage.setItem('books', JSON.stringify(books))
    setBorrowedBooks(cachedCallback(isLogin.id as string))
  }

  const columns: ColumnsType<{
    title: string
    key: string
    author: string
    isbn: number
  }> = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Author',
      dataIndex: 'author',
      key: 'author',
    },
    {
      title: 'ISBN',
      dataIndex: 'isbn',
      key: 'isbn',
    },
    {
      title: 'Return',
      dataIndex: 'return',
      key: 'return',
      render: (_, record) => (
        <Button
          type="primary"
          id="return"
          onClick={() => returnBook(record.title)}
        >
          Return
        </Button>
      ),
    },
  ]

  return (
    <div>
      <Link to={'/library'}>Go to Library.</Link>
      <div>
        Borrowed Books
        <Table dataSource={borrowedBooks} columns={columns} />
      </div>
      <Button onClick={handleLogout} type="default">
        Log out
      </Button>
    </div>
  )
}

export default Home
