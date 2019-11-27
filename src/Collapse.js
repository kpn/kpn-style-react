import React, { useState } from "react";

import PropTypes from "prop-types";

const propTypes = {
  children: PropTypes.node.isRequired
};
/**
 * Meta class to add collapse functionality
 */
function Collapse({ children }) {
  const [expanded, setExpanded] = useState(false);

  // Tell the child component to behave as collapsed
  const collapsed = true;

  return (
    <React.Fragment>
      {React.Children.map(children, child =>
        React.cloneElement(child, {
          ...child.props,
          collapsed,
          expanded,
          setExpanded
        })
      )}
    </React.Fragment>
  );
};

Collapse.propTypes = propTypes;

export default Collapse;
