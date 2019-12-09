import PropTypes from "prop-types";
import React from "react";
import classNames from "classnames";

const columnProps = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number,
  PropTypes.bool
]);

const propTypes = {
  tag: PropTypes.elementType,
  xs: columnProps,
  s: columnProps,
  m: columnProps,
  l: columnProps,
  className: PropTypes.string
};

const defaultProps = {
  tag: "div"
};

const calculateColumn = (size, value) => {
  if (value === true) {
    return `col--${size}`;
  } else if (
    typeof value === "string" ||
    value instanceof String ||
    Number.isInteger(value)
  ) {
    if (size === "xs") {
      return `col--${value}`;
    }
    return `col--${size}-${value}`;
  }
  return null;
};

const Col = ({ className, tag: Tag, xs, s, m, l, auto, ...attributes }) => {
  const xsSize = calculateColumn("xs", xs);
  const smallSize = calculateColumn("s", s);
  const mediumSize = calculateColumn("m", m);
  const largeSize = calculateColumn("l", l);

  const classes = classNames(
    "col",
    xsSize,
    smallSize,
    mediumSize,
    largeSize,
    className
  );
  return <Tag {...attributes} className={classes} />;
};

Col.propTypes = propTypes;
Col.defaultProps = defaultProps;

export default Col;
