import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import Layout from "src/components/core/layout/layout"
import Img from "gatsby-image/withIEPolyfill"
import Card from "src/components/core/card"
import CardContent from "src/components/core/card-content"
import styled from "styled-components"
import BodyImage from "src/components/core/body-image"
import Spacer from "src/components/core/spacer"
import { Container, Row, Col } from "react-grid-system"
import PostsIndex from "src/components/posts/posts-index"
const Title = styled.h1`
  font-weight: normal;
  font-size: 3rem;
  margin: 0.5rem 0;
`

const Subtitle = styled.h3`
  font-weight: normal;
  font-style: italic;
  font-size: 2rem;
  margin: 0;
  margin-bottom: 1rem;
`

const PostDate = styled.h3`
  font-weight: normal;
  font-style: italic;
  font-size: 1rem;
  margin: 0;
  margin-bottom: 0.5rem;
`

const CoverWrapper = styled.div`
  /* width: ${({ coverstyle }) =>
    coverstyle == "fullwidth" ? "100%" : "auto"};
  height: ${({ coverdimension, coverstyle }) =>
    coverstyle == "fullheight" ? coverdimension + "rem" : "auto"}; */
    ${({ coverstyle, coverdimension }) => {
      if (coverstyle === "fullwidth") {
        return `
            width: 100%;
            margin: 0;
            `
      } else if (coverstyle == "setheight") {
        return `
            max-width: 100%;
            width: auto;
            height: ${coverdimension}rem;
            margin: auto;
            `
      } else if (coverstyle == "setwidth") {
        return `
            max-width: 100%;
            height: auto;
            width: ${coverdimension}rem;
            margin: auto;
            `
      }
    }}
  .gatsby-image-wrapper {
    height: calc(100% - 2rem);
    width: 100%;
  }
`

const CoverCaption = styled.p`
  font-style: italic;
  text-align: center;
  margin-bottom: 2rem;
`

const ToggleBtn = styled.p`
  margin-top: -1rem;
  cursor: pointer;
  &:hover {
    color: #d04c1a;
  }
  margin-bottom: ${props => (props.open === true ? "0" : "2rem")};
`

const MorePostsWrapper = styled.div`
  max-height: ${props => (props.open === true ? "auto" : 0)};
  max-width: ${props => (props.open === true ? "auto" : 0)};
  height: auto;
  transition: all 0.5s;
  display: flex;
  justify-content: flex-start;
  overflow: hidden;
  flex-wrap: wrap;
  a {
    margin: 1rem;
  }
`
const BodyText = styled.div`
  line-height: 2.1rem;
`
const MoreText = styled.p``

const Project = ({ data }) => {
  const projectData = data.prismicProject.data
  console.log(projectData)
  return (
    <Layout>
    <Col xs={12} md={9}>

      <Spacer />
      <Card>
        <CardContent>
          <Title>{projectData.project_name ? projectData.project_name.text : null}</Title>
          <PostDate>{projectData.news_date}</PostDate>
        </CardContent>
        {projectData.project_body.map(bodyPart => {
          console.log(bodyPart)
          return (
            <CardContent>
              {bodyPart.body_text ? (
                <BodyText
                  dangerouslySetInnerHTML={{ __html: bodyPart.body_text.html }}
                />
              ) : null}
              {bodyPart.body_image.localFile &&
              bodyPart.body_image.localFile.childImageSharp ? (
                <BodyImage
                  image={bodyPart.body_image.localFile.childImageSharp.sizes}
                />
              ) : null}
            </CardContent>
          )
        })}
      </Card>
      </Col>
    </Layout>
  )
}
export default Project
export const pageQuery = graphql`
  query ProjectBySlug($uid: String!) {
    prismicProject(uid: { eq: $uid }) {
      uid

      data {
        project_name {
          text
        }
        project_abstract {
          html
        }
        banner_image {
          localFile {
            childImageSharp {
              sizes(maxWidth: 1200){ base64
                tracedSVG
                aspectRatio
                src
                srcSet
                srcWebp
                srcSetWebp
                sizes
                originalImg
                originalName
                presentationWidth
                presentationHeight}
            }
          }
        }
        location {
          html
        }
        project_body {
          body_text {
            html
          }
          body_image {
            localFile {
              childImageSharp {
                sizes(maxWidth: 1200){ base64
                    tracedSVG
                    aspectRatio
                    src
                    srcSet
                    srcWebp
                    srcSetWebp
                    sizes
                    originalImg
                    originalName
                    presentationWidth
                    presentationHeight}
              }
            }
          }
        }
      }
    }
  }
`
