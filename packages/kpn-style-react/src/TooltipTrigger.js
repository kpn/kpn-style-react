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

const TooltipTrigger = ({ className, tag: Tag, ...attributes }) => {
  const classes = classNames("tooltip__trigger", className);
  return <Tag {...attributes} className={classes} />;
};

TooltipTrigger.propTypes = propTypes;
TooltipTrigger.defaultProps = defaultProps;

export default TooltipTrigger;
