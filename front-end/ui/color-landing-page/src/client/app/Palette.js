import React from "react";

const Row = (props) => {
  const {bg, name, guid, classColor, classTitle} = props
  const stylesheet = {
    backgroundColor: bg,
    height: '20em',
  }
  return (
    <div className="row no-gutters text-center">
      <div className={classColor} style={stylesheet}></div>
      <div className={classTitle}>
        <h3>{name}</h3>
        <p className="lead mb-0">{guid}</p>
      </div>
    </div>
  )
}

export default (props) => {
  return (
    <section className="container-fluid p-0">
      <Row
        bg="#f3e2c9"
        name="Gardenia"
        guid="SW 6665"
        classTitle="col-lg-6 order-lg-1 my-auto p-3"
        classColor="col-lg-6 order-lg-2"
        />
      <Row
        bg="#edece6"
        name="Pure White"
        guid="SW 7005"
        classTitle="col-lg-6 order-lg-2 my-auto p-3"
        classColor="col-lg-6 order-lg-1"
        />
      <Row
        bg="#6591a8"
        name="Blue Cruise"
        guid="SW 7606"
        classTitle="col-lg-6 order-lg-1 my-auto p-3"
        classColor="col-lg-6 order-lg-2"
        />
    </section>
  )
}
