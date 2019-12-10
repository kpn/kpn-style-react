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

const FooterBody = ({ className, tag: Tag, ...attributes }) => {
  const classes = classNames("footer__body", className);
  return <Tag {...attributes} className={classes} />;
};

FooterBody.propTypes = propTypes;
FooterBody.defaultProps = defaultProps;

export default FooterBody;

