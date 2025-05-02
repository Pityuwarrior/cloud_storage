'use client'
import variables from '../../assets/scss/Login.module.scss'
import { FaUser } from 'react-icons/fa'
import { FaKey } from 'react-icons/fa'
import { FormEvent } from 'react'
import { useRouter } from 'next/navigation'

export default function Login() {
    const router = useRouter()
    async function hadleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const username = formData.get('username')
        const password = formData.get('password')

        const response = await fetch('/api/auth/login', {
            method: 'POST',
            headers: {'Content-Type': "application/json"},
            body: JSON.stringify({ username, password })
        })

        if (response.ok) {
            router.push('/profile')
        }else{
            const error = await response.json()
            alert(error.message)
        }
    }
    return (
        <div className={variables.LoginContainer}>         
            <form className={variables.LoginForm} onSubmit={hadleSubmit}>
                <h1 className={variables.LoginTitle}>Login</h1>
                <div className={variables.LoginUsername}>
                    <label htmlFor="username" className={variables.form_label}><FaUser /></label>
                    <input type="text" id="username" name="username" className={variables.form_input} placeholder="Username" />
                </div>
                <div className={variables.LoginPassword}>
                    <label htmlFor="password" className={variables.form_label}><FaKey /></label>
                    <input type="password" id="password" name="password" className={variables.form_input} placeholder="Password" />
                </div>
                <button type="submit" className={variables.LoginButton}>Login</button>
            </form>
        </div>
    );
}
