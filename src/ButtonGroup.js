import PropTypes from "prop-types";
import React from "react";
import classNames from "classnames";

const propTypes = {
  tag: PropTypes.node,
  className: PropTypes.string,
  alignRight: PropTypes.bool,
  respond: PropTypes.bool,
  reverse: PropTypes.bool
};

const defaultProps = {
  tag: "div",
  alignRight: false,
  respond: false,
  reverse: false
};

const ButtonGroup = ({
  className,
  tag: Tag,
  alignRight,
  respond,
  reverse,
  ...attributes
}) => {
  const classes = classNames(
    "button-group",
    alignRight ? "button-group--right" : null,
    respond ? "button-group--respond" : null,
    reverse ? "button-group--reverse" : null,
    className
  );
  return <Tag {...attributes} className={classes} />;
};

ButtonGroup.propTypes = propTypes;
ButtonGroup.defaultProps = defaultProps;

export default ButtonGroup;
