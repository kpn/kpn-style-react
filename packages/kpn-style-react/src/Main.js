import PropTypes from "prop-types";
import React from "react";
import classNames from "classnames";

const propTypes = {
  tag: PropTypes.elementType,
  className: PropTypes.string,
  fitLayout: PropTypes.bool,
  web: PropTypes.bool,
};

const defaultProps = {
  tag: "main",
  fitLayout: true,
  web: false
};

const Main = ({ className, tag: Tag, fitLayout, web,...attributes }) => {
  const layoutClass = web ? "web-layout__main" : "app-layout__main";
  const classes = classNames(
    fitLayout ? layoutClass : null,
    "main",
    className
  );
  return <Tag {...attributes} className={classes} />;
};

Main.propTypes = propTypes;
Main.defaultProps = defaultProps;

export default Main;
