import * as React from "react"
import { Header } from 'src/components/Header/Header';
import { UserList } from 'src/components/User/UserList/UserList';


export class Users extends React.Component {
  private title: string;
  constructor(props : UserList) {
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
        <div className="container" >
          <button type="button" className="btn btn-primary">+Новый пользователь</button>
        </div>
        <div className="container">
          <UserList userList={[{
            // tslint:disable-next-line: object-literal-sort-keys
            id: "1", firstName: "Никита", secondName: "Мошкин", patronymic: "Андреевич"
          }, 
          {
            // tslint:disable-next-line: object-literal-sort-keys
            id: "2", firstName: "Анна Виталия", secondName: "Кублицкая", patronymic: "Денисовна"
          }, 
          {
            // tslint:disable-next-line: object-literal-sort-keys
            id: "3", firstName: "Виктория", secondName: "Прохорова", patronymic: "Николаевна"
          }, 
          {
            // tslint:disable-next-line: object-literal-sort-keys
            id: "4", firstName: "Михаил", secondName: "Чешуин", patronymic: "Александрович"
          }, 
          {
            // tslint:disable-next-line: object-literal-sort-keys
            id: "5", firstName: "Елена", secondName: "Геворкян", patronymic: "Суреновна"
          }
          ]} />
        </div>
        
      </React.Fragment> 
    )
  }
}