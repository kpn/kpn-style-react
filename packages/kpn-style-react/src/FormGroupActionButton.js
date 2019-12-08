import PropTypes from "prop-types";
import React from "react";
import classNames from "classnames";

const propTypes = {
  tag: PropTypes.elementType,
  className: PropTypes.string
};

const defaultProps = {
  tag: "button"
};

const FormGroupActionButton = ({ className, tag: Tag, ...attributes }) => {
  const classes = classNames("input-field__action-button", className);
  return <Tag {...attributes} className={classes} />;
};

FormGroupActionButton.propTypes = propTypes;
FormGroupActionButton.defaultProps = defaultProps;

export default FormGroupActionButton;

