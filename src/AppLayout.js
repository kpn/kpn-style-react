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

const AppLayout = ({className, tag: Tag, ...attributes}) => {
  const classes = classNames("app-layout", className);
  return <Tag {...attributes} className={classes} />;
};

AppLayout.propTypes = propTypes;
AppLayout.defaultProps = defaultProps;

export default AppLayout;
