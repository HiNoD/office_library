import * as React from 'react';
import { BookList } from 'src/components/Book/BookList/BookList';

export class Books extends React.Component {
  constructor(props : BookList) {
    super(props);
    this.state = { title: 'Список книг' }
  }

  public render() {
      return(
        <div className="container row">
          <h2>Books</h2>
        </div>
        
      )
  }
}
