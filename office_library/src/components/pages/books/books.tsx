import * as React from 'react';
import { BookList } from 'src/components/Book/BookList/BookList';
import { Header } from 'src/components/Header/Header';

export class Books extends React.Component {
  private title: string;

  constructor(props : BookList) {
    super(props);
    this.title = "Список книг";
  }

  public render() {
      return(
        <React.Fragment>
          <Header title={this.title}/>
          <div className="container" >
            <button type="button" className="btn btn-primary">+Новая книга</button>
          </div>
          
          <div className="container ">
            <BookList bookList={[{
             id:'1',
// tslint:disable-next-line: object-literal-sort-keys
             author: 'Роберт Мартин',
             name: 'Чистый код',
             categories: [
               {id: '56', name: 'Для разработчиков'}, {id: '12', name: 'Улучшение кода' }
             ],
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
              status: 'tooked'
             }
            ]

            }
            />
          </div>
        </React.Fragment>
      )
  }
}
