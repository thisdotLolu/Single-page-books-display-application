import React from 'react'
import BookCard from './BookCard'


const BookList = (props) => {
  return (
    <div className='list'>
        {
            props.books.map((book)=>{
                return <BookCard 
                key={book.id} 
                image={book.volumeInfo.imageLinks.thumbnail} 
                title={book.volumeInfo.title} 
                author={book.volumeInfo.authors} 
                published={book.volumeInfo.publishedDate}/>
            })
        }
    </div>
  )
}

export default BookList