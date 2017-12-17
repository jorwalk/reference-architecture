import React from "react";
import ReactDOM from 'react-dom'

import StepZilla from 'react-stepzilla'


const Step1 = () => (
    <header>
      <h1>Step One</h1>
    </header>
);
const Step2 = () => (
    <header>
      <h2>Step Two</h2>
    </header>
);
const Step3 = () => (
    <header>
      <h3>Step Three</h3>
    </header>
);


const steps =
    [
      {name: 'Step 1', component: <Step1 />},
      {name: 'Step 2', component: <Step2 />},
      {name: 'Step 3', component: <Step3 />}
    ]


class App extends React.Component {
  render() {

    return(
      <header>
         <h1>Steps</h1>
         <div className='step-progress'>
            <StepZilla steps={steps} dontValidate={true} />
        </div>
      </header>
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
