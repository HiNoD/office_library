import * as React from "react"
import { AddingUserForm } from 'src/components/AddingUserForm/AddingUserForm';
import { Header } from 'src/components/Header/Header';
import { UserList } from 'src/components/User/UserList/UserList';
import usersRepository from 'src/domain/repository/impl/UsersRepository';
import './users.css';

const PAGE_NAME = 'Список пользователей';

interface IUsersProps {
  title: string;
}

interface IUsersState {
  isAdding: boolean;
}

export class Users extends React.Component<IUsersProps, IUsersState> {
  private title: string;
  private users: IUserItem[];


  constructor(props : IUsersProps) {
    super(props);
    this.title = PAGE_NAME;
    this.users = [] as IUserItem[];
    this.state ={
      isAdding: false
    }
  }

  public componentDidMount() {
    usersRepository.getUsersList().then((Response: IUserItem[]) => (this.users = Response));
  }

  public render () {
    
    return (
      <React.Fragment>
        <Header title={this.title}/>
        {!this.state.isAdding ? 
          <React.Fragment>
            <div className="row justify-content-end new-user-button" >
              <div className="col-3">
                <button type="button" className="btn btn-primary" 
                  onClick={this.handleAddingUserButtonClick}>+Новый пользователь
                </button>
              </div>
            </div>
            <div className="container">
            <UserList userList= {this.users}/>
          </div>
          </React.Fragment> : 
          <React.Fragment>
            <AddingUserForm />
          </React.Fragment>
        }
          
          
      </React.Fragment> 
    )
  }
  private handleAddingUserButtonClick = (e: any) => {
    e.preventDefault()
    this.setState({isAdding: true})
  }
}