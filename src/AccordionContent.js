import PropTypes from "prop-types";
import React from "react";
import classNames from "classnames";

const propTypes = {
  tag: PropTypes.node,
  className: PropTypes.string
};

const defaultProps = {
  tag: "div"
};

const AccordionContent = ({ className, tag: Tag, ...attributes }) => {
  const classes = classNames("accordion__content", className);
  return <Tag {...attributes} className={classes} />;
};

AccordionContent.propTypes = propTypes;
AccordionContent.defaultProps = defaultProps;

export default AccordionContent;
