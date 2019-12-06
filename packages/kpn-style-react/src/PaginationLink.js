import PropTypes from "prop-types";
import React from "react";
import classNames from "classnames";

const propTypes = {
  tag: PropTypes.elementType,
  className: PropTypes.string,
  active: PropTypes.bool,
  direction: PropTypes.string
};

const defaultProps = {
  tag: "a",
  active: false
};

const PaginationLink = ({
  className,
  tag: Tag,
  active,
  direction,
  ...attributes
}) => {
  const classes = classNames(
    "pagination__link",
    active ? "pagination__link--active" : null,
    className
  );

  const dataAttrs = {
    ...(direction && { "data-direction": direction })
  };
  return <Tag {...attributes} {...dataAttrs} className={classes} />;
};

PaginationLink.propTypes = propTypes;
PaginationLink.defaultProps = defaultProps;

export default PaginationLink;
