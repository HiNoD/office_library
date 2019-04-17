import * as React from "react"
import { UserList } from 'src/components/User/UserList/UserList';

export class Users extends React.Component {
  constructor(props : UserList) {
    super(props);
    this.state = { title: 'Список книг' }
  }
  public render () {
    return (
      <React.Fragment>
        <h2>Users</h2>
      </React.Fragment> 
    )
  }
}