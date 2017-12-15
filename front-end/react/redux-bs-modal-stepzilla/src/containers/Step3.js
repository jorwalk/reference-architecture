import React, { Component } from 'react';

export default class Step3 extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <div className="step step3">
        <h1>Step 3</h1>
        <button className="btn btn-lg btn-success float-right">Save</button>
      </div>
    )
  }
}
