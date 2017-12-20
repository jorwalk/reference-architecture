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

const Dashboard = (props) => (
  <div className="card">
    <div className="card-body">
      <h4 className="card-title">{props.title}</h4>
      <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
      <a href="#" className="btn btn-primary">Go somewhere</a>
    </div>
  </div>
)

class App extends React.Component {
  render() {

    Endpoints.login({one:'two'})

    return(
      <article className="container">
        <section className="row">
          <div className="col-12">
            <h1>DASHBOARD</h1>
          </div>
        </section>
        <section className="row">
          <div className="col-xs-12 col-sm-4">
            <Dashboard title="New Board" />
          </div>
          <div className="col-xs-12 col-sm-4">
            <Dashboard title="My Boards" />
          </div>
          <div className="col-xs-12 col-sm-4">
            <Dashboard title="My Account" />
          </div>
        </section>
        <Jumbotron />
        <header>
           <h1>HOME One</h1>
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
  document.getElementById('home')
);
