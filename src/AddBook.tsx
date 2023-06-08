import { Button, Form, Input, InputNumber } from 'antd'
import { BookInterface, Status } from './types'
import { useNavigate } from 'react-router-dom'

// title: string;
//   author: string;
//   ISBN: number;
//   id: string;
//   owner?: string | null;
//   status: Status;
const AddBook = () => {
  const [form] = Form.useForm()
  const navigate = useNavigate()
  const onFinish = (values: {
    title: string
    author: string
    isbn: number
  }) => {
    //   console.log("Success:", values);
    const b: BookInterface = {
      title: values.title,
      author: values.author,
      ISBN: values.isbn,
      id: 'id' + Math.random().toString(16).slice(10),
      status: Status.AVAILABLE,
      owner: null,
    }
    const books: BookInterface[] = JSON.parse(
      localStorage.getItem('books') || ''
    ) as BookInterface[]
    books.push(b)
    localStorage.setItem('books', JSON.stringify(books))
    console.log(JSON.parse(localStorage.getItem('books') || ''))
    form.resetFields()
    navigate('/library')
  }

  return (
    <Form
      form={form}
      onFinish={onFinish}
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 14 }}
      layout="horizontal"
      style={{ maxWidth: 600 }}
    >
      <Form.Item
        label="Title"
        name="title"
        id="title"
        rules={[{ required: true, message: 'Please input book title!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Author"
        name="author"
        id="author"
        rules={[{ required: true, message: 'Please input author name!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="ISBN"
        name="isbn"
        id="isbn"
        rules={[{ required: true, message: 'Please input ISBN!' }]}
      >
        <InputNumber />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 2, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}

export default AddBook
