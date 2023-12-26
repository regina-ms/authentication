import React from 'react'
import { newsItem } from './NewsList'


export default function NewsItem({title, image, content} : newsItem) {
  return (
    <li className='card'>
        <img src="https://loremflickr.com/320/240?random=2" className="card-img-top" alt={title} /> 
        <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{content}</p>
      </div>
    </li>
  )
}
