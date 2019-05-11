interface IOrdersRepository {
  getOrders() : Promise<IOrderItem[]>;
  createOrder(value: Partial<IOrderItem>) : Promise<IOrderItem>;
}