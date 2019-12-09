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

const TooltipBody = ({ className, tag: Tag, ...attributes }) => {
  const classes = classNames("tooltip__body", className);
  return <Tag {...attributes} className={classes} />;
};

TooltipBody.propTypes = propTypes;
TooltipBody.defaultProps = defaultProps;

export default TooltipBody;
