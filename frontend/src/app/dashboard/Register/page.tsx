import variables from '../../assets/scss/Register.module.scss'
import { FaUser } from 'react-icons/fa'
import { FaEnvelope } from 'react-icons/fa'
import { FaKey } from 'react-icons/fa'

export default function Register() {
    return (
        <div className={variables.RegisterContainer}>         
            <form className={variables.RegisterForm}>
                <h1 className={variables.RegisterTitle}>Register</h1>
                <div className={variables.RegisterUsername}>
                    <label htmlFor="username" className={variables.form_label}><FaUser /></label>
                    <input type="text" id="username" className={variables.form_input} placeholder="Username" />
                </div>
                <div className={variables.RegisterEmail}>
                    <label htmlFor="email" className={variables.form_label}><FaEnvelope /></label>
                    <input type="email" id="email" className={variables.form_input} placeholder="Email" />
                </div>
                <div className={variables.RegisterPassword}>
                    <label htmlFor="password" className={variables.form_label}><FaKey /></label>
                    <input type="password" id="password" className={variables.form_input} placeholder="Password" />
                </div>
                <div className={variables.RegisterPasswordAgain}>
                    <label htmlFor="password" className={variables.form_label}><FaKey /></label>
                    <input type="password" id="password" className={variables.form_input} placeholder="Password Again" />
                </div>
                <button type="submit" className={variables.RegisterButton}>Register</button>
            </form>
        </div>
    );
}