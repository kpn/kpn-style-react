import PropTypes from "prop-types";
import React from "react";
import classNames from "classnames";

const propTypes = {
  tag: PropTypes.node,
  className: PropTypes.string
};

const defaultProps = {
  tag: "ul"
};

const ActionMenuList = ({ className, tag: Tag, ...attributes }) => {
  const classes = classNames("action-menu__list", className);
  return <Tag {...attributes} className={classes} />;
};

ActionMenuList.propTypes = propTypes;
ActionMenuList.defaultProps = defaultProps;

export default ActionMenuList;
