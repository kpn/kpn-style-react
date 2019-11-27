import PropTypes from "prop-types";
import React from "react";
import classNames from "classnames";

const propTypes = {
  tag: PropTypes.node,
  className: PropTypes.string
};

const defaultProps = {
  tag: "a"
};

const BreadcrumbItem = ({className, tag: Tag, ...attributes}) => {
  const classes = classNames("breadcrumb__link", className);
  return <Tag {...attributes} className={classes} />;
};

BreadcrumbItem.propTypes = propTypes;
BreadcrumbItem.defaultProps = defaultProps;

export default BreadcrumbItem;
