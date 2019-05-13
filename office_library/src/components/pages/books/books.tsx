import * as React from 'react';
import { BookList } from 'src/components/Book/BookList/BookList';
import booksRepository from 'src/domain/repository/impl/BooksRepository';

import { Header } from 'src/components/Header/Header';

import AddingBookForm from 'src/components/AddingBookForm/AddingBookForm';
import './books.css'

const PAGE_NAME = "Список книг";

interface IBookProps {
  title: string;
}

interface IBookState {
  isAdding: boolean;
  currPage: number;
}

export class Books extends React.Component<IBookProps, IBookState> {
  private title: string;
  private books : IBookItem[];

  constructor(props: IBookProps) {
    super(props);
    this.title = PAGE_NAME;
    this.handleAddingClick = this.handleAddingClick.bind(this);
    this.books = [] as IBookItem[];
    //  this.currPage = 0;
    this.state = {
      currPage: 0,
      isAdding: false
    }
  }

  public componentDidMount() {
    booksRepository.getBooks(this.state.currPage).then((Response: IBookItem[]) => {this.books = Response});
  }


  public render() {
    return(
      <React.Fragment>
        <Header title={this.title}/>
        
        
        <div className="container ">
          {!this.state.isAdding ? (
            <React.Fragment>
              <div className="row justify-content-end new-book-button" >
                <div className="col-3">
                <button type="button" onClick={this.handleAddingClick} className="btn btn-primary">+Новая книга</button>
                </div>
              </div>
              {this.books.length > 0 && <BookList bookList={this.books}/>}  
            </React.Fragment>            
          ) : (
            <AddingBookForm />
          )
          }
          
        </div>
      </React.Fragment>
    )
  }


  private handleAddingClick(): void {
    this.setState({isAdding: true});  
  }
}
