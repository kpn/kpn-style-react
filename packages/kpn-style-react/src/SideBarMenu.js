import PropTypes from "prop-types";
import React from "react";
import classNames from "classnames";

const propTypes = {
  tag: PropTypes.elementType,
  className: PropTypes.string
};

const defaultProps = {
  tag: "ul"
};

const SideBarMenu = ({ className, tag: Tag, ...attributes }) => {
  const classes = classNames("side-bar__menu", className);
  return <Tag {...attributes} className={classes} />;
};

SideBarMenu.propTypes = propTypes;
SideBarMenu.defaultProps = defaultProps;

export default SideBarMenu;
