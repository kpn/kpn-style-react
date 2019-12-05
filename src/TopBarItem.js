import PropTypes from "prop-types";
import React from "react";
import classNames from "classnames";

const propTypes = {
  tag: PropTypes.node,
  className: PropTypes.string,
  trigger: PropTypes.bool
};

const defaultProps = {
  tag: "li",
  trigger: false
};

const TopBarItem = ({ className, tag: Tag, trigger, ...attributes }) => {
  const classes = classNames(
    "top-bar__item",
    trigger ? "top-bar__item--trigger" : null,
    className
  );
  return <Tag {...attributes} className={classes} />;
};

TopBarItem.propTypes = propTypes;
TopBarItem.defaultProps = defaultProps;

export default TopBarItem;
