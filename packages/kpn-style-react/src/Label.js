import PropTypes from "prop-types";
import React from "react";
import classNames from "classnames";

const propTypes = {
  tag: PropTypes.elementType,
  className: PropTypes.string
};

const defaultProps = {
  tag: "label"
};

const Label = ({ className, tag: Tag, ...attributes }) => {
  const classes = classNames("label", className);
  return <Tag {...attributes} className={classes} />;
};

Label.propTypes = propTypes;
Label.defaultProps = defaultProps;

export default Label;

