import React from 'react';
import ReactDOM from 'react-dom';

import App from 'React_workspace/my-app/src/App';
import './Clock/Clock';




const root = ReactDOM.render(<App />, document.getElementById('root'));


var app = (
  <div>
    <clock />
  </div>
);

root.render(app);