import React from "react";

const Helmet = (props) => {
  document.title = "Service de location de voitures - " + props.title;
  return <div className="w-100">{props.children}</div>;
};

export default Helmet;
