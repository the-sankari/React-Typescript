import React from "react";

type ContainerProps = {
  // Define any props if needed in the future
  style: React.CSSProperties;
};

const Container = (props: ContainerProps) => {
  return <div style={props.style}>Text in Container Component</div>;
};

export default Container;
