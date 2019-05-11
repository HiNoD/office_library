import Server from './OfiiceLibraryServer';

class OrdersRepository implements IOrdersRepository {
  public createOrder(value: Partial<IOrderItem>): Promise<IOrderItem> {
    throw new Error("Method not implemented.");
  }
  public getOrders(): Promise<IOrderItem[]> {
    return Server.get("/Request/AllRequest");
  }
}

const ordersRepository = new OrdersRepository();
export default ordersRepository;

export {OrdersRepository};
