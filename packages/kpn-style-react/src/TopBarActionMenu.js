import PropTypes from "prop-types";
import React from "react";
import classNames from "classnames";

const propTypes = {
  tag: PropTypes.elementType,
  className: PropTypes.string,
  expanded: PropTypes.bool
};

const defaultProps = {
  tag: "ul",
  expanded: false
};

const TopBarActionMenu = ({
  className,
  tag: Tag,
  expanded,
  collapsed,
  setexpanded,
  ...attributes
}) => {
  const classes = classNames(
    "top-bar__action-menu",
    collapsed && expanded ? "top-bar__action-menu--visible" : null,
    className
  );
  return <Tag {...attributes} className={classes} />;
};

TopBarActionMenu.propTypes = propTypes;
TopBarActionMenu.defaultProps = defaultProps;

export default TopBarActionMenu;
