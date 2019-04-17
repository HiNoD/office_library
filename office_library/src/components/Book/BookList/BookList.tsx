import * as React from 'react';
import { BookListItem } from '../BookListItem/BookListItem';
// const styles = require('./BookList.css')

interface IBookList {
  bookList: IBookItem[];
}

export class BookList extends React.Component<IBookList> {
  public render () {
      const { bookList } = this.props;
      return (
        <div>
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