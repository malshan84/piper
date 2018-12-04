import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import InitialPage from './InitialPage/InitialPage';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<InitialPage />, document.getElementById(
  'root'
) as HTMLElement);
registerServiceWorker();
