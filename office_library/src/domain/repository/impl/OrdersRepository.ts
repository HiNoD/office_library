class OrdersRepository implements IOrdersRepository {
  public createOrder(value: Partial<IOrder>): Promise<IOrder> {
    throw new Error("Method not implemented.");
  }
  public getOrders(): Promise<IOrder> {
    throw new Error("Method not implemented.");
  }

}