import * as React from 'react';
import { Header } from 'src/components/Header/Header'
import { OrderList } from 'src/components/Order/OrderList/OrderList';
import ordersRepository from 'src/domain/repository/impl/OrdersRepository';

const PAGE_NAME = 'Заявки';

export class Orders extends React.Component {
  private title: string;
  private orders: IOrderItem[];

  constructor(props : any) {
    super(props);
    this.title = PAGE_NAME;
    this.orders = [];
  }

  public componentDidMount() {
    ordersRepository.getOrders().then((Response: IOrderItem[])=> (this.orders = Response) )
  }
  
  public render() {
      return (
        <React.Fragment>
          <Header title={this.title}/>
          <div>
            <OrderList orderList={this.orders} />
          </div>
        </React.Fragment> 
      )
  }
}