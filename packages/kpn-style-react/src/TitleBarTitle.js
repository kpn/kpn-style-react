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

const TitleBarTitle = ({ className, tag: Tag, ...attributes }) => {
  const classes = classNames("title-bar__title", className);
  return <Tag {...attributes} className={classes} />;
};

TitleBarTitle.propTypes = propTypes;
TitleBarTitle.defaultProps = defaultProps;

export default TitleBarTitle;
