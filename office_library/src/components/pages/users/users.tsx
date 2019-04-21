import * as React from "react"
import { Header } from 'src/components/Header/Header';
import { UserList } from 'src/components/User/UserList/UserList';


export class Users extends React.Component {
  private title: string;
  constructor(props : UserList) {
    super(props);
    this.title = 'Список пользователей';
  }
  public render () {
    return (
      <React.Fragment>
        <Header title={this.title}/>
        <div className="container">
          <UserList userList={[{
            // tslint:disable-next-line: object-literal-sort-keys
            id: "1", firstName: "Никита", secondName: "Мошкин", patronymic: "Андреевич"
          }, 
          {
            // tslint:disable-next-line: object-literal-sort-keys
            id: "2", firstName: "Анна Виталия", secondName: "Кублицкая", patronymic: "Денисовна"
          }
          ]} />
        </div>
        
      </React.Fragment> 
    )
  }
}