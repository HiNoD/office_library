import * as React from 'react';
import { BookList } from 'src/components/Book/BookList/BookList';
import booksRepository from 'src/domain/repository/impl/BooksRepository';

import { Header } from 'src/components/Header/Header';

import './books.css'

const PAGE_NAME = "Список книг";

//  TODO Переписать на Component<IBookProps, IBookState>
export class Books extends React.Component {
  private title: string;
  private books : IBookItem[];
  private currPage : number;

  constructor(props : BookList) {
    super(props);
    this.title = PAGE_NAME;
    this.handleAddingClick = this.handleAddingClick.bind(this);
    this.books = [] as IBookItem[];
    this.currPage = 0;
  }

  public componentDidMount() {
    booksRepository.getBooks(this.currPage).then((Response: IBookItem[]) => {this.books = Response});
  }


  public render() {
    return(
      <React.Fragment>
        <Header title={this.title}/>
        <div className="row justify-content-end new-book-button" >
          <div className="col-3">
            <button type="button" onClick={this.handleAddingClick} className="btn btn-primary">+Новая книга</button>
          </div>
          
        </div>
        
        <div className="container ">
          
          <BookList bookList={this.books}/>
          
          
  
        </div>
      </React.Fragment>
    )
  }


  private handleAddingClick(): void {
    alert('I am retard');
  }
}
