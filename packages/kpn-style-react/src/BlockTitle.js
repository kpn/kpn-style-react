import PropTypes from "prop-types";
import React from "react";
import classNames from "classnames";

const propTypes = {
  tag: PropTypes.elementType,
  className: PropTypes.string
};

const defaultProps = {
  tag: "h2"
};

const BlockTitle = ({ className, tag: Tag, ...attributes }) => {
  const classes = classNames("block__title", className);
  return <Tag {...attributes} className={classes} />;
};

BlockTitle.propTypes = propTypes;
BlockTitle.defaultProps = defaultProps;

export default BlockTitle;

