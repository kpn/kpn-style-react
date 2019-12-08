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

const FormFeedback = ({ className, tag: Tag, ...attributes }) => {
  const classes = classNames("input-field__feedback", className);
  return <Tag {...attributes} className={classes} />;
};

FormFeedback.propTypes = propTypes;
FormFeedback.defaultProps = defaultProps;

export default FormFeedback;

