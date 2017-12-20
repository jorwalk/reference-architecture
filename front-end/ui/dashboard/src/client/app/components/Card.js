import React from "react";

const Card = () => (
  <div className="card">
    <div className="card-header">
      <ul className="nav nav-pills card-header-pills">
        <li className="nav-item">
          <a className="nav-link active" href="#">Add</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Edit</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#">Delete</a>
        </li>
      </ul>
    </div>
    <img className="card-img-top" src="http://placehold.it/300x300" alt="Card image cap" />

    <div className="card-body">
      <h4 className="card-title">Card title</h4>
      <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
      <p className="card-text">Some quick example </p>
      <a href="#" className="card-link">Card link</a>
      <a href="#" className="card-link">Another link</a>
    </div>
  </div>
)

export default Card;
