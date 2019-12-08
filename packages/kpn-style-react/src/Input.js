import PropTypes from "prop-types";
import React from "react";
import classNames from "classnames";

const propTypes = {
  tag: PropTypes.elementType,
  className: PropTypes.string,
  type: PropTypes.string
};

const defaultProps = {
  tag: null,
  type: "text"
};

const Input = ({ className, tag, type, ...attributes }) => {
  const textareaInput = type === "textarea";
  const selectInput = type === "select";
  const Tag = tag || (selectInput || textareaInput ? type : "input");

  const classes = classNames(Tag, className);
  if (Tag === "input" && typeof tag !== "string") {
    attributes.type = type;
  }

  return <Tag {...attributes} className={classes} />;
};

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default Input;
