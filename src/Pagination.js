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

const Pagination = ({ className, tag: Tag, ...attributes }) => {
  const classes = classNames("pagination", className);
  return <Tag {...attributes} className={classes} />;
};

Pagination.propTypes = propTypes;
Pagination.defaultProps = defaultProps;

export default Pagination;
