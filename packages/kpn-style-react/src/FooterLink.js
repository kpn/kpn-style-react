import PropTypes from "prop-types";
import React from "react";
import classNames from "classnames";

const propTypes = {
  tag: PropTypes.elementType,
  className: PropTypes.string
};

const defaultProps = {
  tag: "a"
};

const FooterLink = ({ className, tag: Tag, ...attributes }) => {
  const classes = classNames("footer__link", className);
  return <Tag {...attributes} className={classes} />;
};

FooterLink.propTypes = propTypes;
FooterLink.defaultProps = defaultProps;

export default FooterLink;

