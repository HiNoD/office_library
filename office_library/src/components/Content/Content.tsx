import * as React from 'react';

import { Books } from '../pages/books/books';
import { Orders } from '../pages/orders/orders';

import {
    Route,
} from "react-router-dom"

import { Users } from '../pages/users/users';

import './Content.css';

export class Content extends React.Component {
    public render() {
      return (
        <div className="App-content">
          <Route exact={true} path="/" component={ Books }/>
          <Route path="/users" component={ Users }/>
          <Route path="/orders" component={ Orders }/>
        </div>
      )
    }
}