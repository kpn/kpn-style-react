import PropTypes from "prop-types";
import React from "react";
import classNames from "classnames";

const propTypes = {
  tag: PropTypes.elementType,
  className: PropTypes.string
};

const defaultProps = {
  tag: "nav"
};

const Tab = ({ className, tag: Tag, ...attributes }) => {
  const classes = classNames("tab", className);
  return <Tag {...attributes} className={classes} />;
};

Tab.propTypes = propTypes;
Tab.defaultProps = defaultProps;

export default Tab;
