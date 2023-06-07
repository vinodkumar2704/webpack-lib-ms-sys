import { Button, Table } from 'antd'
import { getAvailableBooks } from './helpers/availablebooks'
import { ColumnsType } from 'antd/es/table'
import { useCallback, useContext, useState } from 'react'
import { BookInterface, Status } from './types'
import { ContextProvider } from './context'
import { Link } from 'react-router-dom'

const Library = () => {
  const cachedCallback = useCallback(() => getAvailableBooks, [])

  const [availablebooks, setAvailableBooks] = useState(cachedCallback())
  const contextValue = useContext(ContextProvider)
  if (!contextValue) {
    return null
  }

  const { isLogin } = contextValue
  function borrowBook(title: string) {
    const books: BookInterface[] = JSON.parse(
      localStorage.getItem('books') || ''
    ) as BookInterface[]
    const foundBook = books.find((b: BookInterface) => b.title === title)
    if (foundBook) {
      foundBook.owner = isLogin.id
      foundBook.status = Status.BORROWED
    }
    localStorage.setItem('books', JSON.stringify(books))
    setAvailableBooks(cachedCallback())
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
          onClick={() => borrowBook(record.title)}
        >
          Borrow
        </Button>
      ),
    },
  ]
  return (
    <div>
      <Table dataSource={availablebooks} columns={columns}></Table>
      <Link to={'/library/add'}>
        <Button type="default">AddBook</Button>
      </Link>
    </div>
  )
}

export default Library
