import PropTypes from "prop-types";
import React from "react";
import classNames from "classnames";

const propTypes = {
  tag: PropTypes.node,
  className: PropTypes.string,
  activeSideBar: PropTypes.bool
};

const defaultProps = {
  tag: "div",
  activeSideBar: false
};

const AppLayout = ({ className, tag: Tag, activeSideBar, ...attributes }) => {
  const classes = classNames(
    "app-layout",
    activeSideBar ? "app-layout--active-side-bar" : null,
    className
  );
  return <Tag {...attributes} className={classes} />;
};

AppLayout.propTypes = propTypes;
AppLayout.defaultProps = defaultProps;

export default AppLayout;
