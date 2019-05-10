import * as React from 'react';
import './NavigationPanel.css';

import {
  NavLink,
} from "react-router-dom"

export class NavigationPanel extends React.Component {
  public render() {
    return (
      <ul className="App-navigation-buttons nav flex-column">
        <NavLink exact={true} to="/">
          <li className="nav-item"><p className="App-navigation-button-text">Список книг</p></li>
        </NavLink>
        <NavLink to="/users">
          <li className="nav-item"><p className="App-navigation-button-text">Список пользователей</p></li>
        </NavLink>
        <NavLink to="/orders">
          <li className="nav-item"><p className="App-navigation-button-text">Заявки</p></li>
        </NavLink>
      </ul>
    
    )
  }
}