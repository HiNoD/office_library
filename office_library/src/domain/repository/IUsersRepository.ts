interface IUsersRepository {
  getUsersList() : Promise<IUserItem[]>;
  getUserById(id: string) : Promise<IUserItem>;
  createUser(value: Partial<IUserItem>): Promise<IUserItem>;
}