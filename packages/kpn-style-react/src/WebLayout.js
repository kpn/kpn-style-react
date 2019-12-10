import PropTypes from "prop-types";
import React from "react";
import classNames from "classnames";

const propTypes = {
  tag: PropTypes.elementType,
  className: PropTypes.string,
  activeMegaMenu: PropTypes.bool
};

const defaultProps = {
  tag: "div",
  activeMegaMenu: false
};

const WebLayout = ({ className, tag: Tag, activeMegaMenu, ...attributes }) => {
  const classes = classNames(
    "web-layout",
    activeMegaMenu ? "web-layout--active-mega-menu" : null,
    className
  );
  return <Tag {...attributes} className={classes} />;
};

WebLayout.propTypes = propTypes;
WebLayout.defaultProps = defaultProps;

export default WebLayout;
