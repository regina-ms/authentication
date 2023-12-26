import React, { useContext, useState } from 'react'
import { useRef } from 'react';
import { LogContext } from '../context';

export default function LogInForm() {
    const loginRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const [unknownUser, setUnknownUser] = useState<string>();
    const { isLogged, setIsLogged } = useContext(LogContext)

    const handlerClick = (e: React.FormEvent) => {
        e.preventDefault();
        fetch('http://localhost:7070/auth', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                login: loginRef?.current?.value,
                password: passwordRef?.current?.value
            })
        })
            .then(res => res.json()).then(data => {
                if (data.token) {
                    localStorage.setItem('token', data.token);
                    setIsLogged(true);
                }
                setUnknownUser(data.message);
            })
    }

    return (
        <form id='login-form'>
            <input ref={loginRef} placeholder='User'></input>
            <input ref={passwordRef} placeholder='Password' type='password'></input>
            <button onClick={handlerClick}>Login</button>
            {
                unknownUser && <div className='error'>{unknownUser}</div>
            }
        </form>
    )
}
