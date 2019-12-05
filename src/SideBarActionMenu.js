import PropTypes from "prop-types";
import React from "react";
import classNames from "classnames";

const propTypes = {
  tag: PropTypes.node,
  className: PropTypes.string
};

const defaultProps = {
  tag: "div"
};

const SideBarActionMenu = ({ className, tag: Tag, ...attributes }) => {
  const classes = classNames("side-bar__action-bar", className);
  return <Tag {...attributes} className={classes} />;
};

SideBarActionMenu.propTypes = propTypes;
SideBarActionMenu.defaultProps = defaultProps;

export default SideBarActionMenu;
