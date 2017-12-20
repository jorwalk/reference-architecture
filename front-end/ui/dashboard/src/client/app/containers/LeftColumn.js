import React from "react";
import Card from "../components/Card"

const LeftColumn = () => (
  <div className="col-sm-6 mb-3">
    <div className="row mt-3">
      <div className="col-12 col-sm-6">
        <Card />
      </div>
      <div className="col-12 col-sm-6">
        <Card />
      </div>
    </div>
    <div className="row mt-3">
      <div className="col-12 col-sm-6">
        <Card />
      </div>
      <div className="col-12 col-sm-6">
        <Card />
      </div>
    </div>
    <div className="row mt-3">
      <div className="col-12 col-sm-6">
        <Card />
      </div>
      <div className="col-12 col-sm-6">
        <Card />
      </div>
    </div>
  </div>
)
export default LeftColumn;
