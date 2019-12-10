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

const FooterLogo = ({ className, tag: Tag, ...attributes }) => {
  const classes = classNames("footer__logo", className);
  return <Tag {...attributes} className={classes} />;
};

FooterLogo.propTypes = propTypes;
FooterLogo.defaultProps = defaultProps;

export default FooterLogo;

