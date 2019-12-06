import PropTypes from "prop-types";
import React from "react";
import classNames from "classnames";

const propTypes = {
  tag: PropTypes.elementType,
  className: PropTypes.string,
  fitLayout: PropTypes.bool
};

const defaultProps = {
  tag: "main",
  fitLayout: true
};

const Main = ({ className, tag: Tag, fitLayout, ...attributes }) => {
  const classes = classNames(
    fitLayout ? "app-layout__main" : null,
    "main",
    className
  );
  return <Tag {...attributes} className={classes} />;
};

Main.propTypes = propTypes;
Main.defaultProps = defaultProps;

export default Main;
