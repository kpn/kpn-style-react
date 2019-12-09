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

const DialogBody = ({ className, tag: Tag, ...attributes }) => {
  const classes = classNames("dialog__body", className);
  return <Tag {...attributes} className={classes} />;
};

DialogBody.propTypes = propTypes;
DialogBody.defaultProps = defaultProps;

export default DialogBody;

