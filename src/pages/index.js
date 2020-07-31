import React from "react";
import { graphql } from "gatsby";
import {
  Layout,
  Hero,
  About,
  Projects,
  Survey,
  Slider,
  GridProjects,
} from "../components";
import SEO from "../components/seo";
const HomePage = ({ data }) => {
  const {
    allAirtable: { nodes: projects },
  } = data;
  return (
    <Layout>
      <Hero projects={projects}/>
      <About />
      <GridProjects projects={projects} title="last projects" />
      <Survey />
      <Slider />
    </Layout>
  );
};

export const query = graphql`
  {
    allAirtable(filter: {table: {eq: "Projects"}}, limit: 4, sort: {fields: data___date, order: DESC}) {
      nodes {
        id
        data {
          date
          type
          image {
            localFiles {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          name
        }
      }
    }
  }
`
export default HomePage;
