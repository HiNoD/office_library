import * as React from 'react';
import { BookListItem } from '../BookListItem/BookListItem';
import './BookList.css';

interface IBookList {
  bookList: IBookItem[];
}

export class BookList extends React.Component<IBookList> {
  public render () {
    const {bookList }= this.props;
    return (
      <div className="items-container">
        {bookList.map((book: IBookItem) => {
          return (
            <BookListItem
              key={book.id}
              book={book}
            />
          )})
        }
        
      </div>
    )
  }
  
}