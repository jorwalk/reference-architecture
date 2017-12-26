import React from 'react'

const Pricing = () => (
      <div className="container">

        <h1 className="mt-4 mb-3">Pricing
          <small>Subheading</small>
        </h1>

        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="index.html">Home</a>
          </li>
          <li className="breadcrumb-item active">Pricing</li>
        </ol>

        <div className="row">
          <div className="col-lg-4 mb-4">
            <div className="card h-100">
              <h3 className="card-header">Basic</h3>
              <div className="card-body">
                <div className="display-4">$19.99</div>
                <div className="font-italic">per month</div>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Cras justo odio</li>
                <li className="list-group-item">Dapibus ac facilisis in</li>
                <li className="list-group-item">Vestibulum at eros</li>
                <li className="list-group-item">
                  <a href="#" className="btn btn-primary">Sign Up!</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 mb-4">
            <div className="card card-outline-primary h-100">
              <h3 className="card-header bg-primary text-white">Plus</h3>
              <div className="card-body">
                <div className="display-4">$39.99</div>
                <div className="font-italic">per month</div>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Cras justo odio</li>
                <li className="list-group-item">Dapibus ac facilisis in</li>
                <li className="list-group-item">Vestibulum at eros</li>
                <li className="list-group-item">
                  <a href="#" className="btn btn-primary">Sign Up!</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 mb-4">
            <div className="card h-100">
              <h3 className="card-header">Ultra</h3>
              <div className="card-body">
                <div className="display-4">$159.99</div>
                <div className="font-italic">per month</div>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Cras justo odio</li>
                <li className="list-group-item">Dapibus ac facilisis in</li>
                <li className="list-group-item">Vestibulum at eros</li>
                <li className="list-group-item">
                  <a href="#" className="btn btn-primary">Sign Up!</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>

)

export default Pricing
