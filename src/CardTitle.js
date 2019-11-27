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

const CardTitle = ({ className, tag: Tag, ...attributes }) => {
  const classes = classNames("card__title", className);
  return <Tag {...attributes} className={classes} />;
};

CardTitle.propTypes = propTypes;
CardTitle.defaultProps = defaultProps;

export default CardTitle;
