import React from "react"
import Layout from "src/components/core/layout/layout"
import { graphql } from "gatsby"
import { Container, Row, Col } from "react-grid-system"
import styled from "styled-components"
import colors from "src/components/core/theme/colors"
import GatsbyLink from "gatsby-link"
import Img from "gatsby-image"
import { SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION } from "constants"
import Pin from "src/components/pin/pin"
import PostPreview from "src/components/posts/post-preview"
const BannerWrap = styled.div`
position: relative;
margin-bottom: 4rem;
overflow: hidden;
.gatsby-image-wrapper> div{
    padding-bottom: 45%!important;
}
img, gatsby-image-wrapper{
    height: 100%;
}`

const ContactsWrapper = styled.div`
    p{
        margin: 0.2rem 0;
    }
`
const Technology = ({ data, className }) => {
    console.log(data);
  const bannerImage =
    data.prismicContactspage.data.contact_banner &&
    data.prismicContactspage.data.contact_banner.localFile &&
    data.prismicContactspage.data.contact_banner.localFile.childImageSharp &&
    data.prismicContactspage.data.contact_banner.localFile.childImageSharp.sizes
      ? data.prismicContactspage.data.contact_banner.localFile.childImageSharp
          .sizes
      : null
  const lat = data.prismicContactspage.data.latitude
  const long = data.prismicContactspage.data.longitude
  const contactText = data.prismicContactspage.data.contact_text
    ? data.prismicContactspage.data.contact_text.html
    : null
  return (
    <Layout>

    <Col xs={12}>
      <BannerWrap>
        <Img fluid={bannerImage} />
        <Pin lat={lat} long={long} />
      </BannerWrap>
    </Col>
      <Col xs={9}>
          <ContactsWrapper>
              
        <div dangerouslySetInnerHTML={{__html:contactText}}/>
          </ContactsWrapper>
      </Col>
    </Layout>
  )
}
export default Technology

export const query = graphql`
  query ContactPage {
    prismicContactspage {
      data {
        contact_banner {
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
        contact_text {
          html
        }
        latitude
        longitude
      }
    }
  }
`
