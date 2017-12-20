import React from "react";
import ReactDOM from 'react-dom'
import Endpoints from "./endpoints";

import LeftColumn from "./containers/LeftColumn"
import RightColumn from "./containers/RightColumn"

const Jumbotron = () => (
    <section className="jumbotron text-center">
        <div className="container">
          <h1 className="jumbotron-heading">Board Title</h1>
          <p className="lead text-muted">Board Description</p>
          <p>
            <a href="#" className="btn btn-primary mr-1">Main call to action</a>
            <a href="#" className="btn btn-secondary">Secondary action</a>
          </p>
        </div>
      </section>
)

class App extends React.Component {
  render() {

    Endpoints.login({one:'two'})

    return(
      <article className="container">
        <Jumbotron />
        <header>
           <h1>Heading One</h1>
        </header>
        <section className="row">
          <LeftColumn />
          <RightColumn />
        </section>
      </article>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
