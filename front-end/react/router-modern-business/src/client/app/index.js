import React from "react";
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'
import App from './components/App';

const container = window.document.createElement("article")
container.setAttribute("id", "root");
document.body.appendChild(container)

ReactDOM.render((
  <HashRouter>
    <App />
  </HashRouter>
), document.getElementById('root'))
