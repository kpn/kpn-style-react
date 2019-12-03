import PropTypes from "prop-types";
import React from "react";
import classNames from "classnames";

const propTypes = {
  tag: PropTypes.node,
  className: PropTypes.string
};

const defaultProps = {
  tag: "div"
};

const PaginationSelectField = ({ className, tag: Tag, ...attributes }) => {
  const classes = classNames("pagination__select-field", className);
  return <Tag {...attributes} className={classes} />;
};

PaginationSelectField.propTypes = propTypes;
PaginationSelectField.defaultProps = defaultProps;

export default PaginationSelectField;
