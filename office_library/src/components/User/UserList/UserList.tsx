import * as React from 'react';
import { UserListItem } from '../UserListItem/UserListItem';
// const styles = require('./UserList.css');

interface IUserList {
  userList: IUserItem[];
}

export class UserList extends React.Component<IUserList> {
  public render() {
    const { userList } = this.props;
    return (
      <div>
        {userList.map((user: IUserItem) => {
          return (
            <UserListItem
              key={user.id}
              user={user}
            />
          )})
        }
      </div>
    )
   }
}