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

const TabItem = ({ className, tag: Tag, ...attributes }) => {
  const classes = classNames("tab__item", className);
  return <Tag {...attributes} className={classes} />;
};

TabItem.propTypes = propTypes;
TabItem.defaultProps = defaultProps;

export default TabItem;
