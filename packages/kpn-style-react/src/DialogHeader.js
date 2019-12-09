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

const DialogHeader = ({ className, tag: Tag, ...attributes }) => {
  const classes = classNames("dialog__header", className);
  return <Tag {...attributes} className={classes} />;
};

DialogHeader.propTypes = propTypes;
DialogHeader.defaultProps = defaultProps;

export default DialogHeader;

