import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import _App from "./Blog"
import Layout from './component/Layout';


ReactDOM.render(
  <React.StrictMode>
    <Layout >
          <_App />
         
    </Layout>

  </React.StrictMode>,
  document.getElementById('root')
);


