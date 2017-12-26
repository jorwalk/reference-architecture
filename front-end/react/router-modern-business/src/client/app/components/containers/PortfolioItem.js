import React from 'react'

const PortfolioItem = () => (
  <div className="container">

    <h1 className="mt-4 mb-3">Portfolio Item
      <small>Subheading</small>
    </h1>

    <ol className="breadcrumb">
      <li className="breadcrumb-item">
        <a href="index.html">Home</a>
      </li>
      <li className="breadcrumb-item active">Portfolio Item</li>
    </ol>

    <div className="row">

      <div className="col-md-8">
        <img className="img-fluid" src="http://placehold.it/750x500" alt="" />
      </div>

      <div className="col-md-4">
        <h3 className="my-3">Project Description</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae. Sed dui lorem, adipiscing in adipiscing et, interdum nec metus. Mauris ultricies, justo eu convallis placerat, felis enim.</p>
        <h3 className="my-3">Project Details</h3>
        <ul>
          <li>Lorem Ipsum</li>
          <li>Dolor Sit Amet</li>
          <li>Consectetur</li>
          <li>Adipiscing Elit</li>
        </ul>
      </div>

    </div>

    <h3 className="my-4">Related Projects</h3>

    <div className="row">

      <div className="col-md-3 col-sm-6 mb-4">
        <a href="#">
          <img className="img-fluid" src="http://placehold.it/500x300" alt="" />
        </a>
      </div>

      <div className="col-md-3 col-sm-6 mb-4">
        <a href="#">
          <img className="img-fluid" src="http://placehold.it/500x300" alt="" />
        </a>
      </div>

      <div className="col-md-3 col-sm-6 mb-4">
        <a href="#">
          <img className="img-fluid" src="http://placehold.it/500x300" alt="" />
        </a>
      </div>

      <div className="col-md-3 col-sm-6 mb-4">
        <a href="#">
          <img className="img-fluid" src="http://placehold.it/500x300" alt="" />
        </a>
      </div>

    </div>

  </div>

)

export default PortfolioItem
