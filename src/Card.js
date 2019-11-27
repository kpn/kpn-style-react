import PropTypes from "prop-types";
import React from "react";
import classNames from "classnames";

const propTypes = {
  tag: PropTypes.node,
  className: PropTypes.string,
  stretch: PropTypes.bool
};

const defaultProps = {
  tag: "div",
  stretch: false
};

const Card = ({ className, tag: Tag, stretch, ...attributes }) => {
  const classes = classNames(
    "card",
    stretch ? "card--stretch" : null,
    className
  );
  return <Tag {...attributes} className={classes} />;
};

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;

export default Card;
