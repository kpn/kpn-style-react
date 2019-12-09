import PropTypes from "prop-types";
import React from "react";
import classNames from "classnames";

const propTypes = {
  tag: PropTypes.elementType,
  className: PropTypes.string,
  error: PropTypes.bool
};

const defaultProps = {
  tag: "div",
  error: false
};

const FormGroup = ({ className, tag: Tag, error, ...attributes }) => {
  const classes = classNames(
    "input-field",
    error ? "input-field--error" : null,
    className
  );
  return <Tag {...attributes} className={classes} />;
};

FormGroup.propTypes = propTypes;
FormGroup.defaultProps = defaultProps;

export default FormGroup;
