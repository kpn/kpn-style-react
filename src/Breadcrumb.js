import PropTypes from "prop-types";
import React from "react";
import classNames from "classnames";

const propTypes = {
  tag: PropTypes.node,
  className: PropTypes.string,
  children: PropTypes.node,
  "aria-label": PropTypes.string
};

const defaultProps = {
  tag: "ul",
  "aria-label": "breadcrumb"
};

const Breadcrumb = ({
  className,
  children,
  tag: Tag,
  "aria-label": label,
  ...attributes
}) => {
  const classes = classNames("breadcrumb", className);

  return (
    <Tag {...attributes} className={classes} aria-label={label}>
      {children}
    </Tag>
  );
};

Breadcrumb.propTypes = propTypes;
Breadcrumb.defaultProps = defaultProps;

export default Breadcrumb;
