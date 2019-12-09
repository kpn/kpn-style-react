import PropTypes from "prop-types";
import React from "react";
import classNames from "classnames";

const propTypes = {
  tag: PropTypes.elementType,
  className: PropTypes.string,
  spread: PropTypes.bool
};

const defaultProps = {
  tag: "div",
  spread: false
};

const Row = ({ className, tag: Tag, spread, ...attributes }) => {
  const classes = classNames("row", spread ? "row--spread" : null, className);
  return <Tag {...attributes} className={classes} />;
};

Row.propTypes = propTypes;
Row.defaultProps = defaultProps;

export default Row;
