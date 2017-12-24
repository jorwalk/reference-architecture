import React from 'react'
import { NavLink } from 'react-router-dom'

class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" exact to='/' activeClassName="active">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to='/roster' activeClassName="active">Roster</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to='/schedule' activeClassName="active">Schedule</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}


export default Header
