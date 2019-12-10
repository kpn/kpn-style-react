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

const WebBody = ({ className, tag: Tag, ...attributes }) => {
  const classes = classNames("web-body", className);
  return <Tag {...attributes} className={classes} />;
};

WebBody.propTypes = propTypes;
WebBody.defaultProps = defaultProps;

export default WebBody;
