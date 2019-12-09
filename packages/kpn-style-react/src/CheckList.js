import PropTypes from "prop-types";
import React from "react";
import classNames from "classnames";

const propTypes = {
  tag: PropTypes.elementType,
  className: PropTypes.string,
  inverted: PropTypes.bool
};

const defaultProps = {
  tag: "ul",
  inverted: false
};

const CheckList = ({ className, tag: Tag, inverted, ...attributes }) => {
  const classes = classNames(
    "check-list",
    inverted ? "check-list--inverted" : null,
    className
  );
  return <Tag {...attributes} className={classes} />;
};

CheckList.propTypes = propTypes;
CheckList.defaultProps = defaultProps;

export default CheckList;
