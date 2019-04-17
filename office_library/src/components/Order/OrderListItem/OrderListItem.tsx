import * as React from 'react';

interface IOrderListItem {
	order: IOrderItem;
}

export class OrderListItem extends React.Component<IOrderListItem> {
	public render() {
		const { order } = this.props;
		return (
			<div>
				<div>{ order.name }</div>
				<div>{ order.author }</div>
				<div>{ order.date }</div>
			</div>
		)
	}
}