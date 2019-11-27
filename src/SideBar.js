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

const SideBar = ({className, tag: Tag, fitLayout, ...attributes}) => {

  const classes = classNames(fitLayout ? "app-layout__side-bar" : null, "side-bar", className);
  return <Tag {...attributes} className={classes} />;
};

SideBar.propTypes = propTypes;
SideBar.defaultProps = defaultProps;

export default SideBar;
