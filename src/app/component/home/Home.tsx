import * as React from 'react';
import { Redirect } from 'react-router-dom';
import { Button } from 'reactstrap';
import './Home.css';
const electron = window.require('electron');

export interface IProps {
  name: string;
}

class Home extends React.Component {
  public state = {
    isRedirect: false
  };
  constructor(props: IProps) {
    super(props);
    this.openSelectDirDialog = this.openSelectDirDialog.bind(this);
  }

  public openSelectDirDialog() {
    electron.remote.dialog.showOpenDialog(
      {
        filters: [{ name: 'Text', extensions: ['txt', 'js', 'md'] }],
        properties: ['openFile', 'openDirectory']
      },
      (fileNames: string[]) => {
        if (fileNames === undefined) {
          return;
        }
        console.log(fileNames);
        this.setState(() => {
          return { isRedirect: true };
        });
      }
    );
    return;
  }

  public render() {
    if (this.state.isRedirect) {
      return <Redirect to="/workspace" />;
    }
    return (
      <div className="d-flex flex-column justify-content-center align-items-center layout">
        <div className="align-self-center element">
          <h2>Please select your pipe folder.</h2>
        </div>
        <div className="align-self-center element">
          <Button onClick={this.openSelectDirDialog}>Open pipe folder</Button>
        </div>
      </div>
    );
  }
}

declare global {
  interface Window {
    require: any;
  }
}

export default Home;
