import PropTypes from "prop-types";
import React from "react";
import classNames from "classnames";

const propTypes = {
  tag: PropTypes.node,
  className: PropTypes.string
};

const defaultProps = {
  tag: "li"
};

const ActionMenuItem = ({ className, tag: Tag, ...attributes }) => {
  const classes = classNames("action-menu__item", className);
  return <Tag {...attributes} className={classes} />;
};

ActionMenuItem.propTypes = propTypes;
ActionMenuItem.defaultProps = defaultProps;

export default ActionMenuItem;
