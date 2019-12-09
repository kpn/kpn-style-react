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

const Dialog = ({ className, tag: Tag, active, ...attributes }) => {
  const classes = classNames(
    "dialog",
    active ? "dialog--active" : null,
    className
  );
  return <Tag {...attributes} className={classes} />;
};

Dialog.propTypes = propTypes;
Dialog.defaultProps = defaultProps;

export default Dialog;
