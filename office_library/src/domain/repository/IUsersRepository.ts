interface IUsersRepository {
  getUsersList() : Promise<IUser[]>;
  getUserById(id: string) : Promise<IUser>;
  createUser(value: Partial<IUser>): Promise<IUser>;
}