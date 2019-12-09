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

const PitchBody = ({ className, tag: Tag, ...attributes }) => {
  const classes = classNames("pitch__body", className);
  return <Tag {...attributes} className={classes} />;
};

PitchBody.propTypes = propTypes;
PitchBody.defaultProps = defaultProps;

export default PitchBody;

