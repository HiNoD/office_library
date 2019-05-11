import Server from './OfiiceLibraryServer';

class UsersRepository implements IUsersRepository {
  public getUsersList(): Promise<IUserItem[]> {
    return Server.get('/User/AllUsers');
  }  
  public getUserById(id: string): Promise<IUserItem> {
    throw new Error("Method not implemented.");
  }
  public createUser(value: Partial<IUserItem>): Promise<IUserItem> {
    throw new Error("Method not implemented.");
  }
}

const usersRepository = new UsersRepository();

export default usersRepository;

export {UsersRepository};