import PropTypes from "prop-types";
import React from "react";
import classNames from "classnames";

const propTypes = {
  className: PropTypes.string,
  fill: PropTypes.bool,
  range: PropTypes.bool,
  min: PropTypes.number,
  max: PropTypes.number
};

const defaultProps = {
  fill: true,
  range: false,
  min: 0,
  max: 100
};

const Slider = ({ className, fill, range, ...attributes }) => {
  const classes = classNames(
    "slider",
    range ? "slider--range" : null,
    className
  );
  return (
    <div {...attributes} className={classes}>
      <div className="slider__track">
        {fill && (
          <div class="slider__fill" style={{ left: "10%", width: "70%" }} />
        )}

        <div class="slider__thumb" style={{ left: "10%" }}></div>
        <div class="slider__thumb" style={{ left: "30%" }}></div>
        <div class="slider__thumb" style={{ left: "80%" }}></div>
      </div>
    </div>
  );
};

Slider.propTypes = propTypes;
Slider.defaultProps = defaultProps;

export default Slider;
