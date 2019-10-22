import React from "react"
import { graphql } from "gatsby"
import styled from "@emotion/styled"
import Layout from "../components/layout-2"
import SEO from "../components/seo"
import BlogGrid from "../components/Blog/bloggrid"

const Container = styled.div`
max-width: 800px;
margin: 0 auto;
`


const Blog = ({ data }) => (
    <Layout data={data.contactus} heading="Contact Us">
    
      <SEO title="Blog" description="Blog and News" />
    <Container>
    <BlogGrid posts={data.posts.edges} />
          </Container>
    </Layout>
  )
  
  export default Blog

export const query = graphql`
  query {
    contactus: file(relativePath: { eq: "about.jpg" }) {
      childImageSharp {
        fluid(
          maxWidth: 1500
          traceSVG: { background: "#ffff", color: "#4f52" }
        ) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    posts: allPrismicPost(sort: { fields: [data___date], order: DESC }) {
      edges {
        node {
          uid
          data {
            title {
              text
              html
            }
            headerimage {
              url
              alt
              localFile {
                childImageSharp {
                  fluid(maxWidth: 1200, quality: 90) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
            author {
              text
            }
            date
            description
          }
        }
      }
    }
  }
`
