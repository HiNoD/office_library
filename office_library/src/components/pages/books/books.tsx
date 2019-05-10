import * as React from 'react';
import { BookList } from 'src/components/Book/BookList/BookList';
import { Header } from 'src/components/Header/Header';

import './books.css'
export class Books extends React.Component {
  private title: string;

  constructor(props : BookList) {
    super(props);
    this.title = "Список книг";
    this.handleAddingClick = this.handleAddingClick.bind(this);
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
          <BookList bookList={[
            {
              id:'1',
  // tslint:disable-next-line: object-literal-sort-keys
              author: 'Роберт Мартин',
              name: 'Чистый код',
              categories: [
                {id: '56', name: 'Для разработчиков'}, {id: '12', name: 'Улучшение кода' }
              ],
              description: ""
              ,
              status: 'free'
            }, 
            {
              id:'2',
  // tslint:disable-next-line: object-literal-sort-keys
              author: 'Остин Клеон',
              name: 'Кради как художник. Творческий дневник',
              categories: [
                {id: '56', name: 'Для дизайнеров'}
              ],
              description: "",

              status: 'tooked'
            },
            {
              id:'3',
  // tslint:disable-next-line: object-literal-sort-keys
              author: 'Стив Роулинг',
              name: 'Хочу больше идей',
              categories: [
                {id: '56', name: 'Для дизайнеров'}
              ],
              description: "",
              status: 'tooked'
            },
            {
              id:'4',
  // tslint:disable-next-line: object-literal-sort-keys
              author: 'Р.В. Сеттер',
              name: 'Изучаем Java на примерах и задачах',
              categories: [
                {id: '56', name: 'Для разработчиков'}, {id: '14', name: 'Язык Java'}
              ],
              description: "",
              status: 'tooked'
            },
            {
              id:'5',
  // tslint:disable-next-line: object-literal-sort-keys
              author: 'Камский В. А.',
              name: 'Защита личной информации в Интернете, смартфоне и компьютере ',
              categories: [
                {id: '56', name: 'Для разработчиков'}, {id: '16', name: 'Безопасность'}
              ],
              description: "",
              status: 'free'
            }
          ]
          }
          />
        </div>
      </React.Fragment>
    )
  }

  private handleAddingClick(): void {
    alert('I am retard');
  }
}
