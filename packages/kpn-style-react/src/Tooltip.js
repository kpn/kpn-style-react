import PropTypes from "prop-types";
import React from "react";
import classNames from "classnames";

const propTypes = {
  tag: PropTypes.elementType,
  className: PropTypes.string,
  active: PropTypes.bool
};

const defaultProps = {
  tag: "div",
  active: false
};

const Tooltip = ({ className, tag: Tag, active, ...attributes }) => {
  const classes = classNames(
    "tooltip",
    active ? "tooltip--active" : null,
    className
  );
  return (
    <Tag {...attributes} className={classes} />
  )
};

Tooltip.propTypes = propTypes;
Tooltip.defaultProps = defaultProps;

export default Tooltip;
