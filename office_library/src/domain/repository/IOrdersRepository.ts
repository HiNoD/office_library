interface IOrdersRepository {
  getOrders() : Promise<IOrder>;
  createOrder(value: Partial<IOrder>) : Promise<IOrder>;
}