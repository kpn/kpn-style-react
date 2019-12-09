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

const Modal = ({ className, tag: Tag, active, ...attributes }) => {
  const classes = classNames(
    "modal",
    active ? "modal--active" : null,
    className
  );
  return <Tag {...attributes} className={classes} />;
};

Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;

export default Modal;
