import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="center flex flex-column justify-center items-center mw6 vh-75">
      <h1 className="lh-copy f3 f2-m f1-l">FEATHERHACKS</h1>
      <p>FEATHER STATE | TALLAHACKEE, FL</p>
    </div>
  </Layout>
);

export default IndexPage;
