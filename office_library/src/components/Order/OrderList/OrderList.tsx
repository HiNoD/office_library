import * as React from 'react';
import { OrderListItem } from '../OrderListItem/OrderListItem';

interface IOrderList {
  orderList: IOrderItem[];
}

export class OrderList extends React.Component<IOrderList> {
  public render() {
    const { orderList } = this.props;
    return (
      <div className="items-container">
        {orderList.map((order: IOrderItem) => {
          return (
            <OrderListItem
              key={order.id}
              order={order}
            />
          )
        })}
      </div>
    )
  }
}