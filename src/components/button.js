import React from "react";
import PropTypes from "prop-types";

const PrimaryButton = ({ text, href }) => (
  <a
    href={href}
    className="bg-light-blue ph5-ns ph4 pv3 f4 mv4 galano tracked white br-pill no-underline"
  >
    {text}
  </a>
);

PrimaryButton.propTypes = {
  text: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

export { PrimaryButton };
