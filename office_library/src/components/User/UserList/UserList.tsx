import * as React from 'react';
import { UserListItem } from '../UserListItem/UserListItem';
import './UserList.css';

interface IUserList {
  userList: IUserItem[];
}

export class UserList extends React.Component<IUserList> {
  public render() {
    const { userList } = this.props;
    return (
      <div className="items-container">
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