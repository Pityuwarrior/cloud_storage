import variables from '../../assets/scss/Home.module.scss'
import { FaBeer } from 'react-icons/fa'

export default function Login() {
    return (
        <>
        <label className={variables.login_title}>Login</label>
        <FaBeer />
        </>
    )
}