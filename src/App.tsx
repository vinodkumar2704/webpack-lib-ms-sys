import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Register from './Register'
import ProtectedRoute from './ProtectedRoute'
import Library from './Library'
import { ContextWrapper } from './context'
import AddBook from './AddBook'
// routes
// /login
// /signup
// /home => Borrowed + return
// /library =>borrow + Add book.
// /library/add-book =>
//
import { Layout, Space } from 'antd'
const { Header, Content } = Layout

const headerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: '#7dbcea',
}
const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  minHeight: 150,
  // lineHeight: "80px",
  // color: "#fff",
  // backgroundColor:q   '#108ee9',
  padding: 50,
  margin: 50,
}

export const App = () => {
  return (
    <BrowserRouter>
      <ContextWrapper>
        <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
          <Layout>
            <Link to={'/'}>
              <Header style={headerStyle}>Library Management System</Header>
            </Link>
          </Layout>

          <Content style={contentStyle}>
            <Routes>
              <Route
                path="/"
                element={
                  <ProtectedRoute>
                    <Home />
                  </ProtectedRoute>
                }
              />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />

              <Route
                path="/library"
                element={
                  <ProtectedRoute>
                    <Library />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/library/add"
                element={
                  <ProtectedRoute>
                    <AddBook />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </Content>
        </Space>
      </ContextWrapper>
    </BrowserRouter>
  )
}
