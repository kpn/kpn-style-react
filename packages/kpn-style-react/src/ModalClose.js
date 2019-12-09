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

const ModalClose = ({ className, tag: Tag, ...attributes }) => {
  const classes = classNames("modal__close", className);
  return <Tag {...attributes} className={classes} />;
};

ModalClose.propTypes = propTypes;
ModalClose.defaultProps = defaultProps;

export default ModalClose;

