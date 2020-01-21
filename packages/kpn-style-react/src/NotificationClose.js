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

const NotificationClose = ({ className, tag: Tag, ...attributes }) => {
  const classes = classNames("notification__close", className);
  return <Tag {...attributes} className={classes} />;
};

NotificationClose.propTypes = propTypes;
NotificationClose.defaultProps = defaultProps;

export default NotificationClose;

