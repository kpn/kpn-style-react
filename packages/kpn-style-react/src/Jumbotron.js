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

const Jumbotron = ({ className, tag: Tag, ...attributes }) => {
  const classes = classNames("jumbotron", className);
  return <Tag {...attributes} className={classes} />;
};

Jumbotron.propTypes = propTypes;
Jumbotron.defaultProps = defaultProps;

export default Jumbotron;

