import PropTypes from "prop-types";
import React from "react";
import classNames from "classnames";

const propTypes = {
  tag: PropTypes.elementType,
  className: PropTypes.string,
  active: PropTypes.bool
};

const defaultProps = {
  tag: "a",
  active: false
};

const TabLink = ({ className, tag: Tag, active, ...attributes }) => {
  const classes = classNames(
    "tab__link",
    active ? "tab__link--active" : null,
    className
  );
  return <Tag {...attributes} className={classes} />;
};

TabLink.propTypes = propTypes;
TabLink.defaultProps = defaultProps;

export default TabLink;
