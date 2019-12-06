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

const ActionMenuTrigger = ({ className, tag: Tag, ...attributes }) => {
  const classes = classNames("action-menu__trigger", className);
  return <Tag {...attributes} className={classes} />;
};

ActionMenuTrigger.propTypes = propTypes;
ActionMenuTrigger.defaultProps = defaultProps;

export default ActionMenuTrigger;
