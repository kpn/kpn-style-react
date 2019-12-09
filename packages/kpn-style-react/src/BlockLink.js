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

const BlockLink = ({ className, tag: Tag, ...attributes }) => {
  const classes = classNames("block__link", className);
  return <Tag {...attributes} className={classes} />;
};

BlockLink.propTypes = propTypes;
BlockLink.defaultProps = defaultProps;

export default BlockLink;

