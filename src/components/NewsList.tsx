import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem';

export type newsItem = {
    id: string,
    title: string,
    image: string,
    content: string
}

export default function NewsList() {
    const [state, setState] = useState<newsItem[]>([]);

    const fetchNews = () => {
        fetch('http://localhost:7070/private/news', {
            method: 'GET',
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        }).then(res => res.json()).then(data => setState(data))
    }

    useEffect(fetchNews, [])

  return (
    <ul className='card-list'>
        {
            state?.map(newsItem => <NewsItem {...newsItem} key={newsItem.id}/>)
        }
    </ul>
  )
}
