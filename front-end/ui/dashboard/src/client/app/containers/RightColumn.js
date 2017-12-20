import React from "react";
import Card from "../components/Card"

const Paint = () => (
  <div className="card mt-3">
    <div className="card-body">
      <h4 className="card-title">Paint Name</h4>
      <p className="card-text">With supporting</p>
    </div>
  </div>
)

const RightColumn = () => (
  <div className="col-sm-6">
    <div className="row mt-3">
      <div className="col-12">
        <Card />
      </div>
    </div>
    <div className="row">
      <div className="col-12 col-sm-4">
        <Paint />
      </div>
      <div className="col-12 col-sm-4">
        <Paint />
      </div>
      <div className="col-12 col-sm-4">
        <Paint />
      </div>
    </div>
    <div className="row">
      <div className="col-12 col-sm-4">
        <Paint />
      </div>
      <div className="col-12 col-sm-4">
        <Paint />
      </div>
      <div className="col-12 col-sm-4">
        <Paint />
      </div>
    </div>
    <div className="row">
      <div className="col-12 col-sm-4">
        <Paint />
      </div>
      <div className="col-12 col-sm-4">
        <Paint />
      </div>
      <div className="col-12 col-sm-4">
        <Paint />
      </div>
    </div>
  </div>
)
export default RightColumn;
