import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const isLogin = localStorage.getItem('logstate')
  if (!isLogin) {
    return <Navigate to={'/login'} />
  } else {
    return children
  }
}

export default ProtectedRoute
