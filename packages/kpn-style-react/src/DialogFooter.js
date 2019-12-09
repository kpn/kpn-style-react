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

const DialogFooter = ({ className, tag: Tag, ...attributes }) => {
  const classes = classNames("dialog__footer", className);
  return <Tag {...attributes} className={classes} />;
};

DialogFooter.propTypes = propTypes;
DialogFooter.defaultProps = defaultProps;

export default DialogFooter;

