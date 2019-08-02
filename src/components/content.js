import React from "react";
import PropTypes from "prop-types";

const Content = ({ children }) => <div className="center mw7">{children}</div>;

Content.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Content;
