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

const ActionMenuLink = ({ className, tag: Tag, ...attributes }) => {
  const classes = classNames("action-menu__link", className);
  return <Tag {...attributes} className={classes} />;
};

ActionMenuLink.propTypes = propTypes;
ActionMenuLink.defaultProps = defaultProps;

export default ActionMenuLink;
