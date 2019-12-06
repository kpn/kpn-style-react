import React, { useEffect, useState } from "react";

import PropTypes from "prop-types";

const propTypes = {
  children: PropTypes.node.isRequired,
  expanded: PropTypes.bool
};

const defaultProps = {
  expanded: false
};

/**
 * Meta component to add collapse functionality
 */
function Collapse({ children, expanded }) {
  const [isExpanded, setExpanded] = useState(expanded);

  // This allows expand to be controlled internally (state) and externally (props)
  useEffect(() => {
    setExpanded(expanded);
  }, [expanded]);

  // Tell the child component to behave as collapsed
  const collapsed = true;
  return (
    <React.Fragment>
      {React.Children.map(children, child =>
        React.cloneElement(child, {
          ...child.props,
          collapsed,
          expanded: isExpanded,
          setexpanded: setExpanded
        })
      )}
    </React.Fragment>
  );
}

Collapse.propTypes = propTypes;
Collapse.defaultProps = defaultProps;

export default Collapse;
