import PropTypes from "prop-types";
import React from "react";
import classNames from "classnames";

const propTypes = {
  tag: PropTypes.elementType,
  className: PropTypes.string
};

const defaultProps = {
  tag: "div"
};

const BlockBody = ({ className, tag: Tag, ...attributes }) => {
  const classes = classNames("block__body", className);
  return <Tag {...attributes} className={classes} />;
};

BlockBody.propTypes = propTypes;
BlockBody.defaultProps = defaultProps;

export default BlockBody;

