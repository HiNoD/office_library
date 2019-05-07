import 'bootstrap/dist/css/bootstrap.css';

import * as React from 'react';

import './App.css';

import { Content } from './components/Content/Content'

import {
  BrowserRouter,
} from "react-router-dom"

import { Provider } from 'mobx-react';
import {NavigationPanel} from './components/NavigationPanel/NavigationPanel'
import booksRepository from './domain/repository/impl/BooksRepository';

const stores = {
  booksRepository,
}

class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { isLoggedIn: false }
  }
  
  public render() {
    return (
      <Provider {...stores}>
        <BrowserRouter>
          <div className="App container-fluid">
            <div className="row">
              <div className="col-md-2 App-navigation">      
                <NavigationPanel />
              </div>
              <div className="col content">
                <Content />
              </div>
            </div>
          </div>  
        </BrowserRouter>  
      </Provider>
     
    );
  }
}

export default App;
