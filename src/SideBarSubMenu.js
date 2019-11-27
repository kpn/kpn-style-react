import PropTypes from "prop-types";
import React from "react";
import classNames from "classnames";

const propTypes = {
  tag: PropTypes.node,
  className: PropTypes.string,
  expanded: PropTypes.bool
};

const defaultProps = {
  tag: "ul",
  expanded: false
};

const SideBarSubMenu = ({ className, tag: Tag, expanded, ...attributes }) => {
  const classes = classNames(
    "side-bar__sub-menu",
    expanded ? "side-bar__sub-menu--visible" : null,
    className
  );
  return <Tag {...attributes} className={classes} />;
};

SideBarSubMenu.propTypes = propTypes;
SideBarSubMenu.defaultProps = defaultProps;

export default SideBarSubMenu;
