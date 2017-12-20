import React from "react";
export default (props) => {
  const {name, brand, guid} = props
  return (
    <section className="bg-light text-center">
      <div className="container">
        <div className="row pt-5 pb-5">
          <div className="col-12">
            <h1 className="display-4">{name}</h1>
            <p className="lead mb-0">{brand}</p>
            <em>{guid}</em>
            <hr className="my-4" />
            <h2>Sign up and start planning your paint colors!</h2>
            <p>
              <a className="btn btn-primary btn-lg ml-4" href="#" role="button">Start Today</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
