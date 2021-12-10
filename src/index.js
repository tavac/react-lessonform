import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import Course from "./components/Course.js"
import React from 'react';
import ReactDOM from 'react-dom';

// ========================================

ReactDOM.render(
  <div className="container-sm col-5">
    <Course/>
  </div >,
  document.getElementById('root')
);
