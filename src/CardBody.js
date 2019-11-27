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

const CardBody = ({ className, tag: Tag, ...attributes }) => {
  const classes = classNames("card__body", className);
  return <Tag {...attributes} className={classes} />;
};

CardBody.propTypes = propTypes;
CardBody.defaultProps = defaultProps;

export default CardBody;
