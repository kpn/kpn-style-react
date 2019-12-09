import PropTypes from "prop-types";
import React from "react";
import classNames from "classnames";

const propTypes = {
  tag: PropTypes.elementType,
  className: PropTypes.string
};

const defaultProps = {
  tag: "button"
};

const DialogClose = ({ className, tag: Tag, ...attributes }) => {
  const classes = classNames("dialog__close", className);
  return <Tag {...attributes} className={classes} />;
};

DialogClose.propTypes = propTypes;
DialogClose.defaultProps = defaultProps;

export default DialogClose;

