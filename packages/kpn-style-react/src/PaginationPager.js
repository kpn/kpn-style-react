import PropTypes from "prop-types";
import React from "react";
import classNames from "classnames";

const propTypes = {
  tag: PropTypes.elementType,
  className: PropTypes.string
};

const defaultProps = {
  tag: "ul"
};

const PaginationPager = ({ className, tag: Tag, ...attributes }) => {
  const classes = classNames("pagination__pager", className);
  return <Tag {...attributes} className={classes} />;
};

PaginationPager.propTypes = propTypes;
PaginationPager.defaultProps = defaultProps;

export default PaginationPager;
