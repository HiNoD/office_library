import * as React from 'react';
import './App.css';


import { BookApplications } from './BookApplications';
import { Books } from './Books';

import {
  HashRouter,
  NavLink,
  Route
} from "react-router-dom"

// import logo from './logo.svg';
import { Users } from './Users'



class App extends React.Component {
  public render() {
    return (
      <HashRouter>
        <div className="App container-fluid">
          <div className="row">
            <div className="col col-lg-2 App-navigation">
                
                <ul className="App-navigation-buttons nav flex-column">
                  <li className="nav-item"><NavLink exact={true} to="/books"><p className="App-navigation-button-text">Список книг</p></NavLink></li>
                  <li className="nav-item"><NavLink to="/users"><p className="App-navigation-button-text">Список пользователей</p></NavLink></li>
                  <li className="nav-item"><NavLink to="/books-applications"><p className="App-navigation-button-text">Заявки</p></NavLink></li>
                </ul>
                
              </div>
              <div className="col offset-2 App-content">
                <Route exact={true} path="/books" component={ Books }/>
                <Route path="/users" component={ Users }/>
                <Route path="/books-applications" component={ BookApplications }/>
              </div>
            </div>
          </div>
          
          
      </HashRouter>  
    );
  }
}

export default App;
