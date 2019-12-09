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

const ModalBody = ({ className, tag: Tag, ...attributes }) => {
  const classes = classNames("modal__body", className);
  return <Tag {...attributes} className={classes} />;
};

ModalBody.propTypes = propTypes;
ModalBody.defaultProps = defaultProps;

export default ModalBody;

