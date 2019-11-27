import PropTypes from "prop-types";
import React from "react";
import classNames from "classnames";

const propTypes = {
  tag: PropTypes.node,
  className: PropTypes.string
};

const defaultProps = {
  tag: "span"
};

const MouseoverBody = ({ className, tag: Tag, ...attributes }) => {
  const classes = classNames("mouseover__body", className);
  return <Tag {...attributes} className={classes} />;
};

MouseoverBody.propTypes = propTypes;
MouseoverBody.defaultProps = defaultProps;

export default MouseoverBody;
