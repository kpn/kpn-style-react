import PropTypes from "prop-types";
import React from "react";
import classNames from "classnames";

const propTypes = {
  tag: PropTypes.elementType,
  className: PropTypes.string
};

const defaultProps = {
  tag: "li"
};

const BreadcrumbItem = ({ className, tag: Tag, ...attributes }) => {
  const classes = classNames("breadcrumb__item", className);
  return <Tag {...attributes} className={classes} />;
};

BreadcrumbItem.propTypes = propTypes;
BreadcrumbItem.defaultProps = defaultProps;

export default BreadcrumbItem;
