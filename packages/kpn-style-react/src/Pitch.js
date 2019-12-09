import PropTypes from "prop-types";
import React from "react";
import classNames from "classnames";

const colors = {
  GREEN: "green",
  BLUE: "blue",
  WHITE: "white"
};

const propTypes = {
  tag: PropTypes.elementType,
  className: PropTypes.string,
  color: PropTypes.oneOf([colors.GREEN, colors.BLUE, colors.WHITE]),
  limited: PropTypes.bool,
  last: PropTypes.bool
};

const defaultProps = {
  tag: "div",
  limited: false,
  last: false,
};

const Pitch = ({ className, tag: Tag, color, limited, last, ...attributes }) => {
  const classes = classNames(
    "pitch",
    color ? `pitch--${color}` : null,
    limited ? "pitch--limited" : null,
    last ? "pitch--last" : null,
    className
  );
  return <Tag {...attributes} className={classes} />;
};

Pitch.propTypes = propTypes;
Pitch.defaultProps = defaultProps;
Pitch.colors = colors;

export default Pitch;
