import * as React from 'react';
import { Route } from 'react-router-dom';
import Home from './component/home/Home';
import NavBar from './component/navbar/NavBar';

export default class App extends React.Component {
  public render() {
    return (
      <div className="layout">
        <Route exact={true} path="/" component={Home} />
        <Route exact={true} path="/navibar" component={NavBar} />
      </div>
    );
  }
}
