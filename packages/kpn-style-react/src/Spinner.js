import PropTypes from "prop-types";
import React from "react";
import classNames from "classnames";

const colors = {
  WHITE: "white"
};

const propTypes = {
  color: PropTypes.oneOf([colors.WHITE]),

  children: PropTypes.node,
  text: PropTypes.string,
  blocking: PropTypes.bool,
  hidden: PropTypes.bool,
  className: PropTypes.string
};

const defaultProps = {
  blocking: false,
  hidden: false
};

const Spinner = ({
  className,
  text,
  blocking,
  hidden,
  children,
  color,
  ...attributes
}) => {
  const classes = classNames(
    !hidden ? "progress-spinner" : null,
    blocking ? "progress-spinner--blocking" : null,
    color ? `progress-spinner--${color}` : null,
    className
  );

  return (
    <div {...attributes} className={classes}>
      {!hidden && text && <div className="progress-spinner__text">{text}</div>}

      {!!children && <>{children}</>}
    </div>
  );
};

Spinner.propTypes = propTypes;
Spinner.defaultProps = defaultProps;
Spinner.colors = colors;

export default Spinner;
