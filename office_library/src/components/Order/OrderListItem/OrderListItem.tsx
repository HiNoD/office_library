import * as React from 'react';
import './OrderListItem.css';

interface IOrderListItem {
	order: IOrderItem;
}

export class OrderListItem extends React.Component<IOrderListItem> {
	public render() {
		const { order } = this.props;
		return (
			<div className="container">
				<div className="row justify-content-between">
					<div className="col-md-4 offset-md-1 order-list-item" >
						<div className="book-name">{ order.title }</div>
						<div className="order-book-author-name">{ order.author }</div>
					</div>
					<div className="col-md-2 order-list-item">
						<div className="book-name row"> <p>От&nbsp;</p> { order.date.toString().substring(0, 10) }</div>
					</div>
				</div>
				<hr className="horizontal-line"/>
			</div>
		)
	}
}