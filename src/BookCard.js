import React from 'react'

const BookCard = (props) => {
  return (
    <div className='card-container'>
        <img src={props.image} alt="" />
        <div className='desc'>
            <h2 >{props.title}</h2>
            <h3>Authors : {props.author}</h3>
            <p>Date Published : {props.published==='0000'?'Not Available': props.published.substring(0,4)}</p>            
        </div>
    </div>
  )
}

export default BookCard