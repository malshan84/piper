import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Root from './router';

ReactDOM.render(<Root />, document.getElementById('root') as HTMLElement);
registerServiceWorker();
