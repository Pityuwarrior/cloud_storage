import variables from '../../assets/scss/Login.module.scss'
import { FaUser } from 'react-icons/fa'
import { FaKey } from 'react-icons/fa'

export default function Login() {
    return (
        <div className={variables.LoginContainer}>         
            <form className={variables.LoginForm}>
                <h1 className={variables.LoginTitle}>Login</h1>
                <div className={variables.LoginUsername}>
                    <label htmlFor="username" className={variables.form_label}><FaUser /></label>
                    <input type="text" id="username" className={variables.form_input} placeholder="Username" />
                </div>
                <div className={variables.LoginPassword}>
                    <label htmlFor="password" className={variables.form_label}><FaKey /></label>
                    <input type="password" id="password" className={variables.form_input} placeholder="Password" />
                </div>
                <button type="submit" className={variables.LoginButton}>Login</button>
            </form>
        </div>
    );
}
