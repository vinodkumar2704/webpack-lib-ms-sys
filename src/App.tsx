import './styles.css'
import IMAGE from './im.png'
import { ClickCounter } from './ClickCounter'

export const App = () => {
  return (
    <>
      <h1>
        react webpack course - {process.env.NODE_ENV}
        {process.env.name}
      </h1>
      <img src={IMAGE} alt="img-logo" />
      <ClickCounter />
    </>
  )
}
