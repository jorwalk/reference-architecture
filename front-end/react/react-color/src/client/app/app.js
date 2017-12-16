import React from "react";
import ReactDOM from 'react-dom'

import {
  AlphaPicker,
  BlockPicker,
  ChromePicker,
  CirclePicker,
  CompactPicker,
  GithubPicker,
  HuePicker,
  MaterialPicker,
  PhotoshopPicker,
  SketchPicker,
  SliderPicker,
  SwatchesPicker,
  TwitterPicker
} from 'react-color';

class Component extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      background: '#fff'
    }
    this.handleChangeComplete = this.handleChangeComplete.bind(this);
  }

  handleChangeComplete(color) {
    this.setState({ background: color.hex });
  }

  render() {
    console.log(this.state)
    const change = this.handleChangeComplete
    const color = this.state.background
    return (
      <div>
        <TwitterPicker color={ color } onChangeComplete={ change } />
        <SwatchesPicker color={ color } onChangeComplete={ change } />
        <SliderPicker color={ color } onChangeComplete={ change } />
        <SketchPicker color={ color } onChangeComplete={ change } />
        <PhotoshopPicker color={ color } onChangeComplete={ change } />
        <MaterialPicker color={ color } onChangeComplete={ change } />
        <HuePicker color={ color } onChangeComplete={ change } />
        <GithubPicker color={ color } onChangeComplete={ change } />
        <CompactPicker color={ color } onChangeComplete={ change } />
        <CirclePicker color={ color } onChangeComplete={ change } />
        <ChromePicker color={ color } onChangeComplete={ change } />
        <BlockPicker color={ color } onChangeComplete={ change } />
        <AlphaPicker color={ color } onChangeComplete={ change } />
        <SketchPicker color={ color } onChangeComplete={ change } />
      </div>
    )
  }
}

// class Component extends React.Component {
//
//
//
//
//   render() {
//     return (
//       <SketchPicker
//         color={ this.state.background }
//         onChangeComplete={ this.handleChangeComplete }
//       />
//     );
//   }
// }


class App extends React.Component {
  render() {
    return(
      <Component />
    )
  }
}


const container = window.document.createElement("article")
container.setAttribute("id", "root");
document.body.appendChild(container)

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
