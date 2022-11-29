import React from "react"
import Layout from "src/components/core/layout/layout"
import { graphql } from "gatsby"
import { Container, Row, Col } from "react-grid-system"
import styled from "styled-components"
import colors from "src/components/core/theme/colors"
import GatsbyLink from "gatsby-link"
import Img from "gatsby-image"
import { SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION } from "constants"
import Pin from 'src/components/pin/pin'
import PostPreview from 'src/components/posts/post-preview';
const BannerWrap = styled.div`
position: relative;
margin-bottom: 4rem;
overflow: hidden;
.gatsby-image-wrapper> div{
    padding-bottom: 45%!important;
}
img, gatsby-image-wrapper{
    height: 100%;
}
`
const Technology = ({ data }) => {
    const bannerImage = data.prismicProjectspage.data.map_image && data.prismicProjectspage.data.map_image.localFile && data.prismicProjectspage.data.map_image.localFile.childImageSharp && data.prismicProjectspage.data.map_image.localFile.childImageSharp.sizes ?  data.prismicProjectspage.data.map_image.localFile.childImageSharp.sizes : null
    const projects = data.allPrismicProject.nodes
    console.log(data);
  return (
    <Layout>
      <Col xs={12}>
        <BannerWrap>
          <Img fluid={bannerImage} />
          {projects.map(project => (
            <Pin title={project.data.project_name ? project.data.project_name.text : null} lat={project.data.latitude} long={project.data.longitude} />
          ))}
        </BannerWrap>
      </Col>
      <Col xs={12}>
          {projects.map(project => 
            {
            return <PostPreview 
                uid={"project/" +project.uid}
  title={project.data.project_name ? project.data.project_name.text : null}
  subtitle={project.data.location ? project.data.location.text : null}
  previewCover={project.data.banner_image ? project.data.banner_image :null }
  previewavatar={project.data.avatar_image && project.data.avatar_image.localFile && project.data.avatar_image.localFile.childImageSharp &&project.data.avatar_image.localFile.childImageSharp.sizes ? project.data.avatar_image.localFile.childImageSharp.sizes :null }
  abstract={project.data.project_abstract ? project.data.project_abstract.html : null}
             />
          })}

      </Col>
    </Layout>
  )
}
export default Technology

export const query = graphql`
query ProjectsPage {
    prismicProjectspage {
      data {
        map_image {
          localFile {
            childImageSharp {
              sizes(maxWidth: 1200) {
                base64
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
                  presentationHeight
              }
            }
          }
        }
        projects_text {
          html
        }
      }
    }
    allPrismicProject {
      nodes {
        uid
        data {
            banner_image {
                md{
                    url
                }
              
              
              alt
            }
            avatar_image {
              localFile {
                childImageSharp {
                  sizes(maxWidth: 400) {
                      base64
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
                      presentationHeight
                  }
                }
              }
              alt
            }
          latitude
          longitude
          location{
              text
          }
          project_abstract {
            html
          }
          project_name {
            text
          }
        }
      }
    }
  }
  
`
