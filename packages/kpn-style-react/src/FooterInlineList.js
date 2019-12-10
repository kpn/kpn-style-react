import PropTypes from "prop-types";
import React from "react";
import classNames from "classnames";

const propTypes = {
  tag: PropTypes.elementType,
  className: PropTypes.string,
  separated: PropTypes.bool
};

const defaultProps = {
  tag: "div",
  separated: false
};

const FooterInlineList = ({
  className,
  tag: Tag,
  separated,
  ...attributes
}) => {
  const classes = classNames(
    "footer__inline-list",
    separated ? "footer__inline-list--separated" : null,
    className
  );
  return <Tag {...attributes} className={classes} />;
};

FooterInlineList.propTypes = propTypes;
FooterInlineList.defaultProps = defaultProps;

export default FooterInlineList;
