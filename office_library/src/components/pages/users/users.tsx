import * as React from "react"
import { AddingUserForm } from 'src/components/AddingUserForm/AddingUserForm';
import { Header } from 'src/components/Header/Header';
import { UserList } from 'src/components/User/UserList/UserList';
import './users.css';

interface IUsersProps {
  title: string;
}

interface IUsersState {
  isAdding: boolean;
}

export class Users extends React.Component<IUsersProps, IUsersState> {
  private title: string;
  constructor(props : IUsersProps) {
    super(props);
    this.title = 'Список пользователей';
    this.state ={
      isAdding: false
    }
  }
  public render () {
    
    return (
      <React.Fragment>
        <Header title={this.title}/>
        {
          !this.state.isAdding ? <React.Fragment>
            <div className="row justify-content-end new-user-button" >
              <div className="col-3">
                <button type="button" className="btn btn-primary" 
                  onClick={this.handleAddingUserButtonClick}>+Новый пользователь
                </button>
              </div>
            </div>
            <div className="container">
            <UserList userList={[{
              // tslint:disable-next-line: object-literal-sort-keys
              id: 1, name: "Никита Мошкин Андреевич", email: "", status: "", position: "" 
            }, 
            {
              // tslint:disable-next-line: object-literal-sort-keys
              id: 2, name: "Анна Виталия Кублицкая Денисовна", email: "", status: "", position: "" 
            }, 
            {
              // tslint:disable-next-line: object-literal-sort-keys
              id: 3, name: "Виктория Прохорова Николаевна", email: "", status: "", position: "" 
            }, 
            {
              // tslint:disable-next-line: object-literal-sort-keys
              id: 4, name: "Михаил Чешуин Александрович", email: "", status: "", position: "" 
            }, 
            {
              // tslint:disable-next-line: object-literal-sort-keys
              id: 5, name: "Елена Геворкян Суреновна", email: "", status: "", position: ""  
            }
            ]} />
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