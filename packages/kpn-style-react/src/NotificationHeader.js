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

const NotificationHeader = ({ className, tag: Tag, ...attributes }) => {
  const classes = classNames("notification__header", className);
  return <Tag {...attributes} className={classes} />;
};

NotificationHeader.propTypes = propTypes;
NotificationHeader.defaultProps = defaultProps;

export default NotificationHeader;

