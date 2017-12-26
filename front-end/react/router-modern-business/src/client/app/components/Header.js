import React from 'react'
import { NavLink } from 'react-router-dom'

class Header extends React.Component {
  render() {
    return (
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <a className="navbar-brand" href="index.html">Start Bootstrap</a>
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" exact to='/about' activeClassName="active">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" exact to='/services' activeClassName="active">Services</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" exact to='/contact' activeClassName="active">Contact</NavLink>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownPortfolio" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Portfolio
                </a>
                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownPortfolio">
                  <NavLink className="dropdown-item" exact to='/portfolio-1-col' activeClassName="active">1 Column Portfolio</NavLink>
                  <NavLink className="dropdown-item" exact to='/portfolio-2-col' activeClassName="active">2 Column Portfolio</NavLink>
                  <NavLink className="dropdown-item" exact to='/portfolio-3-col' activeClassName="active">3 Column Portfolio</NavLink>
                  <NavLink className="dropdown-item" exact to='/portfolio-4-col' activeClassName="active">4 Column Portfolio</NavLink>
                  <NavLink className="dropdown-item" exact to='/portfolio-item' activeClassName="active">Single Portfolio Item</NavLink>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownBlog" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Blog
                </a>
                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownBlog">
                  <a className="dropdown-item" href="blog-home-1.html">Blog Home 1</a>
                  <a className="dropdown-item" href="blog-home-2.html">Blog Home 2</a>
                  <a className="dropdown-item" href="blog-post.html">Blog Post</a>
                </div>
              </li>
              <li className="nav-item active dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownBlog" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Other Pages
                </a>
                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownBlog">
                  <NavLink className="dropdown-item" exact to='/full-width' activeClassName="active">Full Width Page</NavLink>
                  <NavLink className="dropdown-item" exact to='/sidebar' activeClassName="active">Sidebar Page</NavLink>
                  <a className="dropdown-item" href="faq.html">FAQ</a>
                  <NavLink className="dropdown-item" exact to='/404' activeClassName="active">404</NavLink>
                  <NavLink className="dropdown-item" exact to='/pricing' activeClassName="active">Pricing Table</NavLink>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    )
  }
}


export default Header
