import * as React from 'react';
import './UserListItem.css';

interface IUserListItem {
  user: IUserItem;
}

export class UserListItem extends React.Component<IUserListItem> {
  public render () {
    const { user } = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-auto offset-md-1 username">
            <button type="button" className="btn btn-link">
              { user.secondName } { user.firstName } { user.patronymic }
            </button>
          </div>
        </div>
        <hr className="horizontal-line"/>
      </div>
    )
  }
}