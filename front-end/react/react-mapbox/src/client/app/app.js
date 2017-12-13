import React from "react";
import ReactDOM from 'react-dom'

import ThreeDMap from './ThreeDMap'
class App extends React.Component {
  render() {
    return(
      <header>
         <h1>Heading One</h1>
         <ThreeDMap />
      </header>
    )
  }
}

const container = window.document.createElement("article")
container.setAttribute("id", "root");
document.body.appendChild(container)

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
