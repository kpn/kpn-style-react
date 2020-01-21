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

const NotificationBody = ({ className, tag: Tag, ...attributes }) => {
  const classes = classNames("notification__body", className);
  return <Tag {...attributes} className={classes} />;
};

NotificationBody.propTypes = propTypes;
NotificationBody.defaultProps = defaultProps;

export default NotificationBody;

