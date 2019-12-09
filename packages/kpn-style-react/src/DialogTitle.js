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

const DialogTitle = ({ className, tag: Tag, ...attributes }) => {
  const classes = classNames("dialog__title", className);
  return <Tag {...attributes} className={classes} />;
};

DialogTitle.propTypes = propTypes;
DialogTitle.defaultProps = defaultProps;

export default DialogTitle;

