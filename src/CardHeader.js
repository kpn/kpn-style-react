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

const CardHeader = ({className, tag: Tag, ...attributes}) => {
  const classes = classNames("card__header", className);
  return <Tag {...attributes} className={classes} />;
};

CardHeader.propTypes = propTypes;
CardHeader.defaultProps = defaultProps;

export default CardHeader;
