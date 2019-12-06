import PropTypes from "prop-types";
import React from "react";
import classNames from "classnames";

const propTypes = {
  tag: PropTypes.elementType,
  className: PropTypes.string
};

const defaultProps = {
  tag: "select"
};

const PaginationSelect = ({ className, tag: Tag, ...attributes }) => {
  const classes = classNames("pagination__select", className);
  return <Tag {...attributes} className={classes} />;
};

PaginationSelect.propTypes = propTypes;
PaginationSelect.defaultProps = defaultProps;

export default PaginationSelect;
