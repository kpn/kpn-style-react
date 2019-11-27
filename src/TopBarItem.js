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

const TopBarItem = ({ className, tag: Tag, ...attributes }) => {
  const classes = classNames("top-bar__item", className);
  return <Tag {...attributes} className={classes} />;
};

TopBarItem.propTypes = propTypes;
TopBarItem.defaultProps = defaultProps;

export default TopBarItem;
