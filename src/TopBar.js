import PropTypes from "prop-types";
import React from "react";
import classNames from "classnames";

const propTypes = {
  tag: PropTypes.node,
  className: PropTypes.string,
  fitLayout: PropTypes.bool,
};

const defaultProps = {
  tag: "nav",
  fitLayout: true,  // By default true, I dont think it is used anywhere else
};

const TopBar = ({className, tag: Tag, fitLayout, ...attributes}) => {

  const classes = classNames(fitLayout ? "app-layout__top-bar" : null, "top-bar", className);
  return <Tag {...attributes} className={classes} />;
};

TopBar.propTypes = propTypes;
TopBar.defaultProps = defaultProps;

export default TopBar;
