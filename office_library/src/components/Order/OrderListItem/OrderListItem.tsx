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
				<div className="row">
					<div className="col-md-4 offset-md-1" >
						<div className="book-name">{ order.name }</div>
						<div className="author-name">{ order.author }</div>
					</div>
					<div className="col-md-2 offset-md-4">
						<div className="book-name row"> <p>От&nbsp;</p> { order.date.getDate() } <p>.</p> 
							{	order.date.getMonth() } <p>.</p>{ order.date.getFullYear() }
						</div>
					</div>
				</div>
				<hr className="horizontal-line"/>
			</div>
		)
	}
}