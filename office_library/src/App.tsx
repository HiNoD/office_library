import 'bootstrap/dist/css/bootstrap.css';

import * as React from 'react';

import './App.css';

import { Content } from './components/Content/Content'

import {
  BrowserRouter,
} from "react-router-dom"

import {NavigationPanel} from './components/NavigationPanel/NavigationPanel'
class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { isLoggedIn: false }
  }
  
  public render() {
    return (
      <BrowserRouter>
        <div className="App container-fluid">
          <div className="row">
            <div className="col col-lg-2 App-navigation">      
              <NavigationPanel />
            </div>
            <div className="col offset-2">
              <Content />
            </div>
          </div>
        </div>  
      </BrowserRouter>  
    );
  }
}

export default App;
