import React from "react";
import ReactDOM from 'react-dom'

class App extends React.Component {
  render() {

    return(
      <main>
        <article>
        <h1>GROSS DESIGN co. <br /> <span>(Made by <a href="http://mattgross.io" target="_blank">Matt Gross</a>, for <a href="https://evenvision.com">EvenVision</a>)</span></h1>
        </article>
        <video autoPlay loop id="video-background" muted plays-inline='true'>
          <source src="https://player.vimeo.com/external/158148793.hd.mp4?s=8e8741dbee251d5c35a759718d4b0976fbf38b6f&profile_id=119&oauth2_token_id=57447761" type="video/mp4" />
        </video>
      </main>
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
