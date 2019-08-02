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
import feather from "../images/hackfsu_logo.svg";
import MLH from "./mlh";

import content from "../content";

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
      <MLH />
      <img src={feather} className="absolute h2 ma4" />
      <main className="sans-serif">{children}</main>
      <footer className="galano white tc bg-dark-grey pa4">
        <a href={content.main.emailLink} className="no-underline f3 white">
          {content.main.emailDisplay}
        </a>
        <p className="mv2 f4">{content.main.footerText}</p>
      </footer>
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
