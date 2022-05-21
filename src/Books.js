import React, { Component } from 'react'
import SearchArea from './SearchArea'
import request from 'superagent'
import BookList from './BookList';

export default class Books extends Component {
    constructor(props){
        super(props);
        this.state={
            books:[],
            searchField:'',
            sort:''
        }
    }

    searchBook=(e)=>{
        e.preventDefault()
        request
        .get('https://www.googleapis.com/books/v1/volumes')
        .query({q: this.state.searchField})
        .then((data)=>{
            const cleanData=this.cleanData(data)
            this.setState({
                books:cleanData
            })
        })
    }
    handleSort=(e)=>{
        this.setState({sort:e.target.value})
    }

    handleSearch=(e)=>{
        // console.log(this.state.searchField)
        this.setState({
            searchField:e.target.value
        })
    }
    cleanData=(data)=>{
        const cleanedData=data.body.items.map(book=>{
            if(book.volumeInfo.hasOwnProperty('publishedDate')===false){
                book.volumeInfo['publishedDate']='0000';
            }
            else if(book.volumeInfo.hasOwnProperty('imageLinks')===false){
                book.volumeInfo['imageLinks']={thumbnail:'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg'}
            }
            return book
        })
        return cleanedData;
    }
   render() {
       const sortedBooks=this.state.books.sort((a,b)=>{
           if(this.state.sort==='Newest'){
               return parseInt(b.volumeInfo.publishedDate.substring(0,4))-parseInt(a.volumeInfo.publishedDate.substring(0,4))
           }
           else if(this.state.sort==='Oldest'){
               return parseInt(a.volumeInfo.publishedDate.substring(0,4))-parseInt(b.volumeInfo.publishedDate.substring(0,4))
           }
       })
      return (
        <div>
            <SearchArea searchBook={this.searchBook} handleSearch={this.handleSearch} handleSort={this.handleSort}></SearchArea>
            <BookList books={sortedBooks}></BookList>
        </div>
    )
  }
}
