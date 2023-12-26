import React, { useContext, useEffect, useState } from 'react'
import { LogContext } from '../context';

export default function User() {
  const {isLogged, setIsLogged} = useContext(LogContext);
  const [state, setState] = useState<any>();


  const fetchUserData = () => {
    fetch('http://localhost:7070/private/me', {
        method: 'GET',
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
        }
    }).then(res => {
        if(res.status === 401) {
            setIsLogged(false);
            localStorage.removeItem('token');
            return
        }
        return res.json()
    }).then(data => setState(data))
}

const handlerClick = (e:React.FormEvent) => {
    e.preventDefault();
    setIsLogged(false);
    localStorage.removeItem('token');
}

useEffect(fetchUserData, [])

  return (
    <div className='user'>
      <div className='greeting'>Hello, {state?.name}</div>
      <img src={state?.avatar} alt={state?.name}/>
      <button onClick={handlerClick}>Logout</button>
    </div>
  )
}
