import React from 'react';
import ReactDOM from 'react-dom';
import Routings from './Routings.js';

//Redux_Store
import store from './Store/index.js';

//Connect REDUX_STORE_WITH_REACT to give store data access to React Component...
import {Provider} from 'react-redux';

import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './../node_modules/jquery/dist/jquery.min.js';
import './../node_modules/popper.js/dist/popper.min.js';
import './../node_modules/bootstrap/dist/js/bootstrap.min.js';

ReactDOM.render(
  <Provider store={store}>
  <Routings />
  </Provider>,
  document.getElementById('root')
);


