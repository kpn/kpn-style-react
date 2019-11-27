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

const CardFooter = ({className, tag: Tag, ...attributes}) => {
  const classes = classNames("card__footer", className);
  return <Tag {...attributes} className={classes} />;
};

CardFooter.propTypes = propTypes;
CardFooter.defaultProps = defaultProps;

export default CardFooter;
