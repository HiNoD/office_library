import * as React from 'react';
// const styles = require('./UserListItem.css');

interface IUserListItem {
  user: IUserItem;
}

export class UserListItem extends React.Component<IUserListItem> {
  public render () {
    const { user } = this.props;
    return (
      <div>
        <div>{user.secondName}</div>
        <div>{user.firstName}</div>
        <div>{user.patronymic}</div>
      </div>
    )
  }
}