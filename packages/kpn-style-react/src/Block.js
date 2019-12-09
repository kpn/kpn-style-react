import PropTypes from "prop-types";
import React from "react";
import classNames from "classnames";

const colors = {
  GREEN: "green",
  BLUE: "blue"
};

const propTypes = {
  tag: PropTypes.elementType,
  className: PropTypes.string,
  color: PropTypes.oneOf([colors.GREEN, colors.BLUE]),
  stretch: PropTypes.bool
};

const defaultProps = {
  tag: "div",
  stretch: false
};

const Block = ({ className, tag: Tag, color, stretch, ...attributes }) => {
  const classes = classNames(
    "block",
    color ? `block--${color}` : null,
    stretch ? "block--stretch" : null,
    className
  );
  return <Tag {...attributes} className={classes} />;
};

Block.propTypes = propTypes;
Block.defaultProps = defaultProps;
Block.colors = colors;

export default Block;
