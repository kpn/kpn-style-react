import PropTypes from "prop-types";
import React from "react";
import classNames from "classnames";

const types = {
  INFO: "informative",
  ERROR: "error",
  CAUTION: "caution",
  SUCCESS: "success"
};
const propTypes = {
  tag: PropTypes.elementType,
  className: PropTypes.string,
  type: PropTypes.oneOf([types.CAUTION, types.ERROR, types.INFO, types.SUCCESS])
};

const defaultProps = {
  tag: "div",
  type: types.INFO
};

const Notification = ({ className, tag: Tag, type, ...attributes }) => {
  const classes = classNames(
    "notification",
    `notification--${type}`,
    className
  );
  return <Tag {...attributes} className={classes} />;
};

Notification.propTypes = propTypes;
Notification.defaultProps = defaultProps;
Notification.types = types;

export default Notification;
