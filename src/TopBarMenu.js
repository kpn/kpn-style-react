import PropTypes from "prop-types";
import React from "react";
import classNames from "classnames";

const propTypes = {
  tag: PropTypes.node,
  className: PropTypes.string
};

const defaultProps = {
  tag: "ul"
};

const TopBarMenu = ({ className, tag: Tag, ...attributes }) => {
  const classes = classNames("top-bar__menu", className);
  return <Tag {...attributes} className={classes} />;
};

TopBarMenu.propTypes = propTypes;
TopBarMenu.defaultProps = defaultProps;

export default TopBarMenu;
