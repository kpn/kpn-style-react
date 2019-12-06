import PropTypes from "prop-types";
import React from "react";
import classNames from "classnames";

const propTypes = {
  tag: PropTypes.elementType,
  className: PropTypes.string
};

const defaultProps = {
  tag: "a"
};

const TopBarLogo = ({ className, tag: Tag, ...attributes }) => {
  const classes = classNames("top-bar__logo", className);
  return <Tag {...attributes} className={classes} />;
};

TopBarLogo.propTypes = propTypes;
TopBarLogo.defaultProps = defaultProps;

export default TopBarLogo;
