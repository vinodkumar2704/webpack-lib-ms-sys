import { useContext } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { ContextProvider } from './context'
import { Button, Form, Input } from 'antd'

interface Loggeduser {
  username: string
  name: string
  password: string
}
const Login = () => {
  const navigate = useNavigate()
  //   const [user, setUser] = useState({
  //     username: "",
  //     password: "",
  //   });

  const [form] = Form.useForm()
  const contextValue = useContext(ContextProvider)
  if (!contextValue) {
    return null
  }

  const { setIsLogin } = contextValue
  const onFinish = (values: { username: string; password: string }) => {
    console.log('Success:', values)
    if (!localStorage.getItem('user')) {
      alert('invalid username or password.')
      form.resetFields()
    } else {
      const loggeduser: Loggeduser = JSON.parse(
        localStorage.getItem('user') || ''
      ) as Loggeduser
      if (
        loggeduser.username === values.username &&
        loggeduser.password === values.password
      ) {
        localStorage.setItem('logstate', 'true')
        setIsLogin({
          name: values.username,
          id: values.username,
          status: true,
        })
        navigate('/')
      } else {
        alert('invalid username or password.')
        form.resetFields()
      }
    }
  }

  //   // eslint-disable-next-line no-unused-vars
  //   const login = (e: { preventDefault: () => void }) => {
  //     e.preventDefault();
  //     if (!localStorage.getItem("user")) {
  //       alert("invalid username or password.");
  //       setUser({ username: "", password: "" });
  //     } else {
  //       const loggeduser = JSON.parse(localStorage.getItem("user") || "");
  //       if (
  //         loggeduser.username === user.username &&
  //         loggeduser.password === user.password
  //       ) {
  //         localStorage.setItem("logstate", "true");
  //         setIsLogin({ name: user.username, id: Math.random(), status: true });
  //         navigate("/");
  //       } else {
  //         alert("invalid username or password.");
  //         setUser({ username: "", password: "" });
  //       }
  //     }
  //   };
  return !localStorage.getItem('logstate') ? (
    <div>
      <Form
        form={form}
        name="authform"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        autoComplete="off"
        onFinish={onFinish}
      >
        <Form.Item
          label="Username"
          name="username"
          id="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      <Link to={'/register'}>Register</Link>
    </div>
  ) : (
    // <div>
    // <form onSubmit={login}>
    //     <label htmlFor="username">
    //       Username
    //       <input
    //         id="username"
    //         name="username"
    //         placeholder="Username"
    //         type="text"
    //         value={user.username}
    //         onChange={(e) =>
    //           setUser({ ...user, [e.target.name]: e.target.value })
    //         }
    //       ></input>
    //     </label>
    //     <label htmlFor="password">
    //       Password
    //       <input
    //         id="password"
    //         name="password"
    //         placeholder="Password"
    //         type="password"
    //         value={user.password}
    //         onChange={(e) =>
    //           setUser({ ...user, [e.target.name]: e.target.value })
    //         }
    //       ></input>
    //     </label>
    //     <button>Submit</button>
    //   </form>
    //   <Link to={"/register"}>Register</Link>
    // </div>

    <Navigate to={'/'} />
  )
}

export default Login
