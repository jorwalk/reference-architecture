import React from "react";
export default (props) => {
  const {background} = props
  const stylesheet = {
    backgroundColor: background,
    height: '30em'
  }

  return (
    <section className="row" style={stylesheet}></section>
  )
}
