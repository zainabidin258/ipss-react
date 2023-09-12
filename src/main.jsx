import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom';
import IpssApp from './components/IpssApp';

const domContainer = document.getElementById('root');
const root = ReactDOM.createRoot(domContainer);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <IpssApp/>
    </BrowserRouter>
  </React.StrictMode>
);
