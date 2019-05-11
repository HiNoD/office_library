import * as React from 'react';
import { Header } from 'src/components/Header/Header'
import { OrderList } from 'src/components/Order/OrderList/OrderList';

export class Orders extends React.Component {
  private title: string;
  constructor(props : any) {
    super(props);
    this.title = 'Заявки';
  }
  public render() {
      return (
        <React.Fragment>
          <Header title={this.title}/>
          <div>
            <OrderList orderList={[
// tslint:disable-next-line: object-literal-sort-keys
              {id: 12, userId: 23, isCompleted: false, bookId: 43, title: "Я хочу больше идей", author: "Стив Роулинг", 
                comment: "", date: new Date(2019, 4, 21)},
// tslint:disable-next-line: object-literal-sort-keys
              {id: 33, userId: 23, isCompleted: false, bookId: 54, 
                comment: "",title: "Я больше так не могу", author: "Никита Мошкин", date: new Date(2019, 5, 6)}
            ]} />
          </div>
        </React.Fragment> 
      )
  }
}