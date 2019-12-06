import PropTypes from "prop-types";
import React from "react";
import classNames from "classnames";

const propTypes = {
  tag: PropTypes.elementType,
  className: PropTypes.string
};

const defaultProps = {
  tag: "ul"
};

const Accordion = ({ className, tag: Tag, ...attributes }) => {
  const classes = classNames("accordion", className);
  return <Tag {...attributes} className={classes} />;
};

Accordion.propTypes = propTypes;
Accordion.defaultProps = defaultProps;

export default Accordion;
