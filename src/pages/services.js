import React from "react"
import Layout from "src/components/core/layout/layout"
import { graphql } from "gatsby"
import { Container, Row, Col } from "react-grid-system"
import styled from "styled-components"
import colors from "src/components/core/theme/colors"
import GatsbyLink from "gatsby-link"
import Img from "gatsby-image/withIEPolyfill"
import PostPreview from 'src/components/posts/post-preview-service';


const ServiceWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 2rem;
`
const ServiceImageWrapper = styled.div`
    flex: 1 1 25%;
    margin: 0 2rem 0 0;
    border-radius: 8px;
    overflow: hidden;
`
const ServiceTextWrapper = styled.div`
    flex: 1 1 70%;
`
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
const Services = ({ data }) => {

  const services = data.prismicServices.data.service

  return (
    <Layout>
    <Col xs={12}>
    <div>

    <div dangerouslySetInnerHTML={{__html:data.prismicServices.data.title ? data.prismicServices.data.title.html : null}}/>
    </div>
      <BannerWrap>
        <Img fluid={data.prismicServices.data.services_banner && data.prismicServices.data.services_banner.localFile && data.prismicServices.data.services_banner.localFile.childImageSharp && data.prismicServices.data.services_banner.localFile.childImageSharp.sizes ?data.prismicServices.data.services_banner.localFile.childImageSharp.sizes: null}/>
      </BannerWrap>
    </Col>
      <Col xs={12}>
    <div dangerouslySetInnerHTML={{__html:data.prismicServices.data.services_text ? data.prismicServices.data.services_text.html : null}}/>
      {services.map(service=>{
          return(
            <PostPreview 
title={service.service_name ? service.service_name.text : null }
previewCover={service.service_image  ? service.service_image : null}
previewavatar={null}
abstract={service.service_text ? service.service_text.text : null }/>)})}
      </Col>
    </Layout>
  )
}
export default Services

export const query = graphql`
query ServicesQuery {
    prismicServices {
      data {
        title {
          text
          html
        }
        services_text {
          html
          text
        }
        services_banner {
          localFile {
            childImageSharp {
              sizes(maxHeight: 1200) {
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
        service {
          service_image {
              md{
                  url
              }
            localFile {
              childImageSharp {
                sizes(maxWidth: 800) {
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
          service_name{
            text
          }
          service_text {
            html
            text
          }
        }
      }
    }
  }
  
`
