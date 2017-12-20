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
        <section className="">
          <div className="row no-gutters text-center">
            <div className="col-4">
              <div className="" style={{backgroundColor:'rgb(243, 226, 201)',height:'10em'}}></div>
              <div className="" style={{backgroundColor:'rgb(237, 236, 230)',height:'10em'}}></div>
              <div className="" style={{backgroundColor:'rgb(101, 145, 168)',height:'10em'}}></div>
            </div>
            <div style={{backgroundColor:'#EBAD5E',height:'30em'}} className="col-8"></div>
          </div>
        </section>
        <hr />
        <section className="">
          <div className="row no-gutters text-center">
            <div style={{backgroundColor:'#EBAD5E',height:'30em'}} className="col-12"></div>
            <div className="col-12 col-sm-4">
              <div className="" style={{backgroundColor:'rgb(243, 226, 201)',height:'10em'}}></div>
              </div>
              <div className="col-12 col-sm-4">
              <div className="" style={{backgroundColor:'rgb(237, 236, 230)',height:'10em'}}></div>
              </div>
              <div className="col-12 col-sm-4">
              <div className="" style={{backgroundColor:'rgb(101, 145, 168)',height:'10em'}}></div>
            </div>

          </div>
        </section>
      </article>
    )
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('app')
);
