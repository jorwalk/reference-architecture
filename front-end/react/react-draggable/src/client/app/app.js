import React from "react";
import ReactDOM from 'react-dom'
import Draggable, {DraggableCore} from 'react-draggable';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {color : props.color, zIndex: 1};
  }
  increase() {
    this.setState({zIndex: this.state.zIndex + 1})
  }
  decrease() {
    this.setState({zIndex: this.state.zIndex - 1})
  }

  render() {
    const cardStyle = {
      height: '10em',
      backgroundColor: this.state.color
    };
    const zStyle = {
      zIndex: this.state.zIndex
    }
    return (
      <Draggable bounds=".container">
        <div className="card w-25 border-light" style={zStyle}>
          <div className="card-img-top" style={cardStyle}></div>
          <div className="card-img-overlay text-white">
            <h6 className="card-title text-center">{this.state.color}</h6>
            <p className="text-center"><small>#12345</small></p>
          </div>
          <div className="card-footer">
            <div className="btn-group pull-right">
              <button className="btn btn-sm" onClick={this.increase.bind(this)}>
                <i className="fa fa-level-up" aria-hidden="true"></i>
              </button>
              <button className="btn btn-sm" onClick={this.decrease.bind(this)}>
                <i className="fa fa-level-down" aria-hidden="true"></i>
              </button>
            </div>

            <button className="btn btn-sm pull-left">
              <i className="fa fa-times" aria-hidden="true"></i>
            </button>

          </div>
        </div>
      </Draggable>
    )
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <header className="container">
         <h1>Heading One</h1>
         <Card color='red' />
         <Card color='blue' />
         <Card color='green' />
      </header>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
