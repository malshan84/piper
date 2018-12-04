import * as React from 'react';
import { Route } from 'react-router-dom';
import InitialPage from './component/InitialPage/InitialPage';

export default class App extends React.Component {
  public render() {
    return <Route exact={true} path="/" component={InitialPage} />;
  }
}
