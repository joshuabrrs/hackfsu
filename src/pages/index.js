import React from "react";

import Layout, { Section } from "../components/layout";
import Content from "../components/content";
import FAQ from "../components/faq";
import SEO from "../components/seo";
import { RainbowDivider } from "../components/dividers";
import { PrimaryButton } from "../components/button";
import content from "../content";

import bgShapes from "../images/background_shapes.svg";
import telescope from "../images/img_telescope.png";

const HeaderDivider = () => (
  <div
    className="bg-light-blue"
    style={{
      width: "4rem",
      height: "0.3rem",
    }}
  />
);

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Section background={bgShapes} className="bg-very-light-blue">
      <div className="center flex flex-column justify-center items-center mw7 vh-75 tc">
        <h1 className="lh-copy f-6-l f1-m f2 mv1 galano type-blue">
          featherhacks
        </h1>
        <p className="avenir-book tracked-mega f3-ns f5 mv1 type-grey">
          FEATHER STATE | TALLAHACKEE, FL
        </p>
        <p className="avenir-medium tracked-mega f3-ns f5 mv1 type-grey">
          FALL 20XX
        </p>
        <PrimaryButton text={"APPLY NOW"} href={"https://hackfsu.com"} />
      </div>
    </Section>
    <RainbowDivider />
    <Section className="bg-very-light-blue">
      <Content>
        <h1 className="galano f2 black-70">{content.details.header}</h1>
        <HeaderDivider />
        {content.details.items.map(el => (
          <>
            <h2 className="galano f3 black-70 mt4">{el.header}</h2>
            <p className="avenir-book f3-ns f4 black-70">{el.body}</p>
          </>
        ))}
      </Content>
    </Section>

    <Section className="bg-dark-blue">
      <Content>
        <h1 className="galano f2 white-90">{content.faqs.header}</h1>
        <HeaderDivider />
        {content.faqs.items.map(el => (
          <FAQ header={el.header.replace(".", "?")} body={el.body} />
        ))}
      </Content>
    </Section>
    <Section background={bgShapes} className="bg-very-light-blue">
      <Content>
        <div className="flex-l">
          <div className="flex flex-column justify-center dn-s">
            <img className="mw5 mv4" src={telescope} />
          </div>
          <div className="mh5-l">
            <h1 className="galano f2 black-70">{content.culture.header}</h1>
            <HeaderDivider />
            <h2 className="galano f3 black-70 mt4">
              {content.culture.subheader}
            </h2>
            <p className="avenir-book f3-ns f4 black-70">
              {content.culture.body}
            </p>
          </div>
        </div>
      </Content>
    </Section>
  </Layout>
);

export default IndexPage;
