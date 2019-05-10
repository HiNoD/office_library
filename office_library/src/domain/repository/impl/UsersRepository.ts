import Server from './OfiiceLibraryServer';

class UsersRepository implements IUsersRepository {
  public getUsersList(): Promise<IUser[]> {
    return Server.get('/User/AllUsers');
  }  
  public getUserById(id: string): Promise<IUser> {
    throw new Error("Method not implemented.");
  }
  public createUser(value: Partial<IUser>): Promise<IUser> {
    throw new Error("Method not implemented.");
  }
}
export default UsersRepository;