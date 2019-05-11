import * as React from 'react';

//  import booksRepository from 'src/domain/repository/impl/BooksRepository';
import { Books } from '../pages/books/books';
import { Orders } from '../pages/orders/orders';

import {
    Route,
} from "react-router-dom"

import { Users } from '../pages/users/users';

import './Content.css';

export class Content extends React.Component {
  public render() {
    //  let books : IBookItem[] = [];
    //  booksRepository.getBooks(0).then((Response: IBookItem[]) => {books = Response});
    return (
      
      <div className="App-content">
        <Route exact={true} path="/" component={ Books }/>
        <Route path="/users" component={ Users }/>
        <Route path="/orders" component={ Orders }/>
      </div>
    )
  }
}