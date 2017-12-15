import React, { Component } from 'react';
import StepZilla from 'react-stepzilla'

import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
// import Step4 from './Step4'
// import Step5 from './Step5'
// import Step6 from './Step6'

export default class Steps extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.sampleStore = {
      email: '',
      gender: '',
      savedToCloud: false
    };
  }

  componentDidMount() {}

  componentWillUnmount() {}

  getStore() {
    return this.sampleStore;
  }

  updateStore() {}

  render() {
    const steps =
    [
      {name: 'Step1', component: <Step1 />},
      {name: 'Step2', component: <Step2 />},
      {name: 'Step3', component: <Step3 />}
      // {name: 'Step2', component: <Step2 getStore={() => (this.getStore())} updateStore={(u) => {this.updateStore(u)}} />},
      // {name: 'Step3', component: <Step3 getStore={() => (this.getStore())} updateStore={(u) => {this.updateStore(u)}} />},
      // {name: 'step4', component: <Step4 getStore={() => (this.getStore())} updateStore={(u) => {this.updateStore(u)}} />},
      // {name: 'Step5', component: <Step5 getStore={() => (this.getStore())} updateStore={(u) => {this.updateStore(u)}} />},
      // {name: 'Step6', component: <Step6 getStore={() => (this.getStore())} updateStore={(u) => {this.updateStore(u)}} />}
    ]

    return (
      <div className='example'>
          <StepZilla
            steps={steps}
            showNavigation={true}
            showSteps={true}
            preventEnterSubmission={true}
            nextButtonCls= "btn btn-prev btn-primary btn-lg float-right"
            backButtonCls= "btn btn-next btn-primary btn-lg float-left"

            // nextTextOnFinalActionStep={"Save"}
           />
      </div>
    )
  }
}
