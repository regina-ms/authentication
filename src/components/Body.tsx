import React, { useContext } from 'react'
import { LogContext } from '../context'
import Landing from './Landing'
import NewsList from './NewsList'

export default function Body() {
  const {isLogged, setIsLogged} = useContext(LogContext)

  return (
    <div className='body'>
    {
      isLogged ? <NewsList /> : <Landing />
    }
    </div>
  )
}
