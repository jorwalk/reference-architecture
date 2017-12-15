import React from 'react';
import Counter from '../containers/Counter';
import AddCounter from '../containers/AddCounter';
import RemoveCounter from '../containers/RemoveCounter';
import Modal from '../containers/Modal';

const App = () => {
  return (
    <article className="container">
      <section className="row">
        <header><Counter /></header>
      </section>
      <section className="row">
        <Modal />
      </section>
      <section className="row">
        <div className="col-12"><AddCounter /></div>
        <div className="col-12"><RemoveCounter /></div>
      </section>
    </article>
  )
}
export default App;
