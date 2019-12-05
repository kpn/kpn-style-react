import PropTypes from "prop-types";
import React from "react";
import classNames from "classnames";

const propTypes = {
  tag: PropTypes.node,
  className: PropTypes.string
};

const defaultProps = {
  tag: "button"
};

const SideBarClose = ({ className, tag: Tag, ...attributes }) => {
  const classes = classNames("side-bar__close", className);
  return <Tag {...attributes} className={classes} />;
};

SideBarClose.propTypes = propTypes;
SideBarClose.defaultProps = defaultProps;

export default SideBarClose;
