import * as React from 'react';
import Macro from '../macro/Macro';
import NavBar from '../navbar/NavBar';

export default class Workspace extends React.Component {
  public render() {
    return (
      <div className="layout d-flex align-items-stretch">
        <div>
          <NavBar />
        </div>
        <div className="flex-grow-1">
          <Macro />
        </div>
      </div>
    );
  }
}
