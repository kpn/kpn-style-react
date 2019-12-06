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

const AppBody = ({ className, tag: Tag, ...attributes }) => {
  const classes = classNames("app-body", className);
  return <Tag {...attributes} className={classes} />;
};

AppBody.propTypes = propTypes;
AppBody.defaultProps = defaultProps;

export default AppBody;
