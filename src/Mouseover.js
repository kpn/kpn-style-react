import PropTypes from "prop-types";
import React from "react";
import classNames from "classnames";

const propTypes = {
  tag: PropTypes.elementType,
  className: PropTypes.string,
  active: PropTypes.bool,
  noHover: PropTypes.bool
};

const defaultProps = {
  tag: "span",
  active: false,
  noHover: false
};

const Mouseover = ({ className, tag: Tag, active, noHover, ...attributes }) => {
  const classes = classNames(
    "mouseover",
    active ? "mouseover--active" : null,
    noHover ? "mouseover--no-hover" : null,
    className
  );
  return <Tag {...attributes} className={classes} />;
};

Mouseover.propTypes = propTypes;
Mouseover.defaultProps = defaultProps;

export default Mouseover;
