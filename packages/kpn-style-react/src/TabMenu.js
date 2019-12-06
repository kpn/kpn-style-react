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

const TabMenu = ({ className, tag: Tag, ...attributes }) => {
  const classes = classNames("tab__menu", className);
  return <Tag {...attributes} className={classes} />;
};

TabMenu.propTypes = propTypes;
TabMenu.defaultProps = defaultProps;

export default TabMenu;
