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

const TitleBar = ({ className, tag: Tag, ...attributes }) => {
  const classes = classNames("app-layout__title-bar title-bar", className);
  return <Tag {...attributes} className={classes} />;
};

TitleBar.propTypes = propTypes;
TitleBar.defaultProps = defaultProps;

export default TitleBar;
