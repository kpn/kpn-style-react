import PropTypes from "prop-types";
import React from "react";
import classNames from "classnames";

const propTypes = {
  tag: PropTypes.elementType,
  className: PropTypes.string
};

const defaultProps = {
  tag: "div"
};

const CardList = ({ className, tag: Tag, ...attributes }) => {
  const classes = classNames("card__list", className);
  return <Tag {...attributes} className={classes} />;
};

CardList.propTypes = propTypes;
CardList.defaultProps = defaultProps;

export default CardList;
