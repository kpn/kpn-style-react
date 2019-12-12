import PropTypes from "prop-types";
import React from "react";
import classNames from "classnames";

const propTypes = {
  value: PropTypes.number,
  children: PropTypes.node,
  text: PropTypes.string,
  blocking: PropTypes.bool,
  hidden: PropTypes.bool,
  className: PropTypes.string
};

const defaultProps = {
  value: 0,
  blocking: false,
  hidden: false
};

const Progress = ({
  className,
  value,
  text,
  blocking,
  hidden,
  children,
  ...attributes
}) => {
  const classes = classNames(
    "progress-bar",
    blocking ? "progress-bar--blocking" : null,
    className
  );

  return (
    <div {...attributes} className={classes}>
      <div className={classNames("progress-bar__meter", hidden ? "hidden" : null)}>
        <div className="progress-bar__value" style={{ width: `${value}%` }} />
        {text && <div className="progress-bar__text">{text}</div>}
      </div>
      {!!children && <>{children}</>}
    </div>
  );
};

Progress.propTypes = propTypes;
Progress.defaultProps = defaultProps;

export default Progress;
