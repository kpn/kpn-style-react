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

const Backdrop = ({ className, tag: Tag, active, ...attributes }) => {
  const classes = classNames(
    "backdrop",
    active ? "backdrop--active" : null,
    className
  );
  return <Tag {...attributes} className={classes} />;
};

Backdrop.propTypes = propTypes;
Backdrop.defaultProps = defaultProps;

export default Backdrop;
