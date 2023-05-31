import './styles.css'
import IMAGE from './im.png'
import { ClickCounter } from './ClickCounter'

export const App =()=>{
    const num = 0
    return <>
    <h1>react webpack course - {process.env.NODE_ENV}</h1><img src={IMAGE} alt='img-logo'/>
    <ClickCounter/>
    </>
}