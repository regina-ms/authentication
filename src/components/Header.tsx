import React, { useContext, useEffect } from 'react'
import LogInForm from './LogInForm';
import { LogContext } from '../context';
import User from './User';


export default function Header() {
    const { isLogged, setIsLogged } = useContext(LogContext);

    useEffect(() => {
        if (localStorage.getItem('token')) {
            setIsLogged(true);
        }
    }, [])

    return (
        <div className='header'>
            <div className='logo'>Neto Social</div>
            {
                isLogged ? <User /> : <LogInForm />
            }
        </div>
    )
}
