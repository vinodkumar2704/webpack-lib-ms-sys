import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Register = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState({
    name: '',
    username: '',
    password: '',
  })
  const register = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    localStorage.setItem('user', JSON.stringify(user))
    navigate('/')
  }
  return (
    <div>
      <form onSubmit={register}>
        <label htmlFor="name">
          Name
          <input
            id="name"
            name="name"
            type="text"
            value={user.name}
            onChange={(e) =>
              setUser({ ...user, [e.target.name]: e.target.value })
            }
          ></input>
        </label>
        {/* <label htmlFor="ph-no">
          Phone number
          <input id="ph-no" name="ph-no" value={name} onChange={(e)=>setName(e.target.value)} ></input>
        </label> */}
        <label htmlFor="username">
          Username
          <input
            id="username"
            name="username"
            type="text"
            value={user.username}
            onChange={(e) =>
              setUser({ ...user, [e.target.name]: e.target.value })
            }
          ></input>
        </label>
        <label htmlFor="password">
          Password
          <input
            id="password"
            name="password"
            type="text"
            value={user.password}
            onChange={(e) =>
              setUser({ ...user, [e.target.name]: e.target.value })
            }
          ></input>
        </label>
        <button>Submit</button>
      </form>
      <Link to={'/login'}>Login</Link>
    </div>
  )
}

export default Register
