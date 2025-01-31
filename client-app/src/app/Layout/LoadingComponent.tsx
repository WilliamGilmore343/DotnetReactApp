import { Dimmer, Loader } from "semantic-ui-react";

import React from "react";

const LoadingComponent: React.FC<{ inverted?: boolean; content?: string }> = ({
  inverted = true,
  content
}) => {
  return (
    <Dimmer active inverted={inverted}>
      <Loader content={content} />
    </Dimmer>
  );
};

export default LoadingComponent;
