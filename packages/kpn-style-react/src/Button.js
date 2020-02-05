import PropTypes from "prop-types";
import React from "react";
import classNames from "classnames";

const propTypes = {
  tag: PropTypes.elementType,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  fluid: PropTypes.bool,
  size: PropTypes.oneOf(["small", "large"]),
  spinner: PropTypes.bool,
  kind: PropTypes.oneOf(["secondary", "link"]),
  width: PropTypes.oneOf([1, 2, 3, 4])
};

const defaultProps = {
  tag: "button",
  disabled: false,
  fluid: false,
  spinner: false
};

const Button = ({
  className,
  tag: Tag,
  disabled,
  fluid,
  size,
  spinner,
  kind,
  width,
  ...attributes
}) => {
  const classes = classNames(
    "button",
    disabled ? "button--disabled" : null,
    fluid ? "button--fluid" : null,
    spinner ? "button--spinner" : null,
    size ? `button--${size}` : null,
    width ? `button--${width}` : null,
    kind ? `button--${kind}` : null,
    className
  );

  return <Tag {...attributes} className={classes} />;
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
