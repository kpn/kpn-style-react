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

const AccordionTitle = ({ className, tag: Tag, ...attributes }) => {
  const classes = classNames("accordion__title", className);
  return <Tag {...attributes} className={classes} />;
};

AccordionTitle.propTypes = propTypes;
AccordionTitle.defaultProps = defaultProps;

export default AccordionTitle;
