import React from "react";
import ReactDOM from 'react-dom'
import Nav from './Nav'
import Footer from './Footer'
import Masthead from './Masthead'
import Detail from './Detail'
import Palette from './Palette'
import ColorStrip from './ColorStrip'

class App extends React.Component {
  render() {

    return(
      <article>
        <Nav />
        <Masthead background='#EBAD5E' />
        <Detail name="Yarrow" brand="Sherwin-Williams" guid="SW 6669" />
        <Palette />
        <ColorStrip />
        <Footer />
      </article>
    )
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('app')
);
