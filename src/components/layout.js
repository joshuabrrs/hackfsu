/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
// import { useStaticQuery, graphql } from "gatsby";

// import "normalize.css/normalize.css";
import "tachyons/css/tachyons.css";
import "../styles/type.css";

const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <>
      <main className="sans-serif">{children}</main>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

const Section = ({ background, className, children }) => (
  <div
    className={"pv5 ph4 " + className}
    style={{
      backgroundImage: `url(${background})`,
    }}
  >
    {children}
  </div>
);

Section.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
export { Section };
