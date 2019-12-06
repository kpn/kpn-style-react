import PropTypes from "prop-types";
import React from "react";
import classNames from "classnames";

const propTypes = {
  tag: PropTypes.elementType,
  className: PropTypes.string,
  expanded: PropTypes.bool
};

const defaultProps = {
  tag: "li",
  expanded: false
};

const AccordionItem = ({ className, tag: Tag, expanded, ...attributes }) => {
  const classes = classNames(
    "accordion__item",
    expanded ? "accordion__item--expanded" : null,
    className
  );
  return <Tag {...attributes} className={classes} />;
};

AccordionItem.propTypes = propTypes;
AccordionItem.defaultProps = defaultProps;

export default AccordionItem;
