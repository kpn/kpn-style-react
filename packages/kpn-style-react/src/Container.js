import PropTypes from "prop-types";
import React from "react";
import classNames from "classnames";

const propTypes = {
  tag: PropTypes.elementType,
  className: PropTypes.string,
  centered: PropTypes.bool,
  tall: PropTypes.bool,
  main: PropTypes.bool,
  limited: PropTypes.bool
};

const defaultProps = {
  tag: "div",
  centered: false,
  tall: false,
  main: false,
  limited: false
};

const Container = ({
  className,
  tag: Tag,
  centered,
  tall,
  main,
  limited,
  ...attributes
}) => {
  const classes = classNames(
    "container",
    centered ? "container--centered" : null,
    tall ? "container--tall" : null,
    main ? "container--main" : null,
    limited ? "container--limited" : null,
    className
  );
  return <Tag {...attributes} className={classes} />;
};

Container.propTypes = propTypes;
Container.defaultProps = defaultProps;

export default Container;
