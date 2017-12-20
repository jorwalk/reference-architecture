import React from "react";

const Card = (props) => {
  const {bg} = props
  const stylesheet = {
    backgroundColor: bg,
    height: '15em'
  }
  const card = 'card border-light'
  return (
    <div className={card}>
      <div style={stylesheet}></div>
      <div className="card-body text-center">
        <h4 className="card-title">Card title</h4>
        <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
        <button type="button" className="btn btn-sm btn-outline-primary">Color Details</button>
      </div>
    </div>
  )
}
export default () => (
<section className="pt-5 pb-5 container-fluid bg-light">
  <div className="card-group">
    <Card bg="#d88f32" />
    <Card bg="#df9938" />
    <Card bg="#ebad5e" />
    <Card bg="#eeb76b" />
    <Card bg="#f4bf77" />
  </div>
</section>
)
