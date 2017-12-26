import React from 'react'

const PortfolioOne = () => (
  <div className="container">

    <h1 className="mt-4 mb-3">Portfolio 1
      <small>Subheading</small>
    </h1>

    <ol className="breadcrumb">
      <li className="breadcrumb-item">
        <a href="index.html">Home</a>
      </li>
      <li className="breadcrumb-item active">Portfolio 1</li>
    </ol>

    <div className="row">
      <div className="col-md-7">
        <a href="#">
          <img className="img-fluid rounded mb-3 mb-md-0" src="http://placehold.it/700x300" alt="" />
        </a>
      </div>
      <div className="col-md-5">
        <h3>Project One</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium veniam exercitationem expedita laborum at voluptate. Labore, voluptates totam at aut nemo deserunt rem magni pariatur quos perspiciatis atque eveniet unde.</p>
        <a className="btn btn-primary" href="#">View Project
          <span className="glyphicon glyphicon-chevron-right"></span>
        </a>
      </div>
    </div>

    <hr />

    <div className="row">
      <div className="col-md-7">
        <a href="#">
          <img className="img-fluid rounded mb-3 mb-md-0" src="http://placehold.it/700x300" alt="" />
        </a>
      </div>
      <div className="col-md-5">
        <h3>Project Two</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, odit velit cumque vero doloremque repellendus distinctio maiores rem expedita a nam vitae modi quidem similique ducimus! Velit, esse totam tempore.</p>
        <a className="btn btn-primary" href="#">View Project
          <span className="glyphicon glyphicon-chevron-right"></span>
        </a>
      </div>
    </div>

    <hr />

    <div className="row">
      <div className="col-md-7">
        <a href="#">
          <img className="img-fluid rounded mb-3 mb-md-0" src="http://placehold.it/700x300" alt="" />
        </a>
      </div>
      <div className="col-md-5">
        <h3>Project Three</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, temporibus, dolores, at, praesentium ut unde repudiandae voluptatum sit ab debitis suscipit fugiat natus velit excepturi amet commodi deleniti alias possimus!</p>
        <a className="btn btn-primary" href="#">View Project
          <span className="glyphicon glyphicon-chevron-right"></span>
        </a>
      </div>
    </div>

    <hr />

    <div className="row">

      <div className="col-md-7">
        <a href="#">
          <img className="img-fluid rounded mb-3 mb-md-0" src="http://placehold.it/700x300" alt="" />
        </a>
      </div>
      <div className="col-md-5">
        <h3>Project Four</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, quidem, consectetur, officia rem officiis illum aliquam perspiciatis aspernatur quod modi hic nemo qui soluta aut eius fugit quam in suscipit?</p>
        <a className="btn btn-primary" href="#">View Project
          <span className="glyphicon glyphicon-chevron-right"></span>
        </a>
      </div>
    </div>

    <hr />

    <ul className="pagination justify-content-center">
      <li className="page-item">
        <a className="page-link" href="#" aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
          <span className="sr-only">Previous</span>
        </a>
      </li>
      <li className="page-item">
        <a className="page-link" href="#">1</a>
      </li>
      <li className="page-item">
        <a className="page-link" href="#">2</a>
      </li>
      <li className="page-item">
        <a className="page-link" href="#">3</a>
      </li>
      <li className="page-item">
        <a className="page-link" href="#" aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
          <span className="sr-only">Next</span>
        </a>
      </li>
    </ul>

  </div>
)

export default PortfolioOne
