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
              {id:"12", name: "Я хочу больше идей", author: "Стив Роулинг", date: new Date(2019, 4, 21)},
              {id:"33", name: "Я больше так не могу", author: "Никита Мошкин", date: new Date(2019, 5, 6)}
            ]} />
          </div>
        </React.Fragment> 
      )
  }
}