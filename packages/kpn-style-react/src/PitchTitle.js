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

const PitchTitle = ({ className, tag: Tag, ...attributes }) => {
  const classes = classNames("pitch__title", className);
  return <Tag {...attributes} className={classes} />;
};

PitchTitle.propTypes = propTypes;
PitchTitle.defaultProps = defaultProps;

export default PitchTitle;

