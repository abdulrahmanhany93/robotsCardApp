import React from "react";

const Scroll = (props) => {
  return <div style={{ scrollY: 7 }}>{props.children}</div>;
};
export default Scroll;
