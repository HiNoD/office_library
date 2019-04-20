import * as React from 'react';
import { BookList } from 'src/components/Book/BookList/BookList';

export class Books extends React.Component {
  private books: BookList;
  constructor(props : BookList) {
    super(props);
    this.state = { title: 'Список книг' }
    this.books = props;
  }

  public render() {
      return(
        <div className="container row">
          <h2>this.title</h2>
          <div>
            {this.books}
          </div>
        </div>
      )
  }
}
