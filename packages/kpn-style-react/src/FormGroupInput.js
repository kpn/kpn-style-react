import PropTypes from "prop-types";
import React from "react";
import classNames from "classnames";

const propTypes = {
  tag: PropTypes.elementType,
  className: PropTypes.string
};

const defaultProps = {
  tag: "div"
};

const FormGroupInput = ({ className, tag: Tag, ...attributes }) => {
  const classes = classNames("input-field__input", className);
  return <Tag {...attributes} className={classes} />;
};

FormGroupInput.propTypes = propTypes;
FormGroupInput.defaultProps = defaultProps;

export default FormGroupInput;

