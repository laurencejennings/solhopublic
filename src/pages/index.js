import React from "react"
import Layout from "src/components/core/layout/layout"
import { graphql } from "gatsby"
import { Container, Row, Col } from "react-grid-system"
import styled from "styled-components"
import colors from "src/components/core/theme/colors"
import GatsbyLink from "gatsby-link"
import Img from "gatsby-image"
import { SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION } from "constants"

// const Title = styled.h2`
//   font-size: 1.5rem;
//   color: ${colors.darkGray};
//   font-family: "EB Garamond", "serif";
//   font-weight: normal;
//   margin-top: 0.5rem;
// `

// const BooksWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   margin-bottom: 5rem;
//   @media (min-width: 576px) {
//     flex-direction: row;
//     flex-wrap: nowrap;
//     margin: 0 -0.2rem;
//   }
//   @media (min-width: 1200px) {
//     flex-wrap: nowrap;
//     margin: 0 -0.5rem;
//   }
// `

// const BookWrapper = styled.div`
//   flex: 1 1 100%;
//   margin-bottom: 1.5rem;
//   @media (min-width: 576px) {
//     flex: 1 1 50%;
//     padding: 0 0.2rem;
//   margin-bottom: 0;
//   }
//   @media (min-width: 1200px) {
//     flex: 0 1 32%;
//     padding: 0 0.5rem;
//     margin-bottom: 0;
//   }
// `
const BannerWrap = styled.div`
position: relative;
`
const BannerTitle = styled.h1`
    padding: 0 2rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    width: 100%;
    text-align: center;
    margin: 0;
    font-weight: 100;
    font-size: 1rem;
    @media screen and (min-width: 300px){
    font-size: 1.5rem;
        }
    @media screen and (min-width: 576px){
    font-size: 2rem;
        }
    @media screen and (min-width: 1200px){
    font-size: 2.5rem;
        }
`
const SponsorsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin-right: -1rem;
    margin-top: 7rem;
    margin-bottom: 7rem;
    
    flex-direction: column;
    width: 100%;
    justify-content: space-between;
    @media screen and (min-width: 430px){
    flex-direction: row;
    }
`

const NewsLink = styled.a`
text-decoration: none;
    transition: all 0.2s;
&:hover{
    color: inherit;
text-decoration: none;
   h3{
    transition: all 0.2s;
    color: ${colors.darkOrange};
text-decoration: underline;
   }
}

`

const SponsorWrapper = styled.a`
display: block;
margin: auto;
margin: 2rem auto;
flex: 1 1 80%;
padding-right: 1rem;
max-width: 75%;
img{
    z-index: -1;
    width: 100%;
}
@media screen and (min-width: 576px){
padding: 1rem 2rem;

    max-width: 15rem;
flex: 1 1 23%;
}
`


const Home = ({ data }) => {
    const bannerImage = data.allPrismicHomepage.nodes && data.allPrismicHomepage.nodes[0].data.bannerimage && data.allPrismicHomepage.nodes[0].data.bannerimage.localFile && data.allPrismicHomepage.nodes[0].data.bannerimage.localFile.childImageSharp &&data.allPrismicHomepage.nodes[0].data.bannerimage.localFile.childImageSharp.sizes ? data.allPrismicHomepage.nodes[0].data.bannerimage.localFile.childImageSharp.sizes : null
    const bannerTitle = data.allPrismicHomepage.nodes && data.allPrismicHomepage.nodes[0].data.banner_title ? data.allPrismicHomepage.nodes[0].data.banner_title.text : null
    const mission = data.allPrismicHomepage.nodes && data.allPrismicHomepage.nodes[0].data.mission_text ? data.allPrismicHomepage.nodes[0].data.mission_text.html : null 
    const missionTitle = data.allPrismicHomepage.nodes && data.allPrismicHomepage.nodes[0].data.mission_title ? data.allPrismicHomepage.nodes[0].data.mission_title.text : null 
    const visionTitle = data.allPrismicHomepage.nodes && data.allPrismicHomepage.nodes[0].data.vision_title ? data.allPrismicHomepage.nodes[0].data.vision_title.text : null 
    const visionText = data.allPrismicHomepage.nodes && data.allPrismicHomepage.nodes[0].data.vision_text ? data.allPrismicHomepage.nodes[0].data.vision_text.html : null 
    const visionImage = data.allPrismicHomepage.nodes && data.allPrismicHomepage.nodes[0].data.vision_image && data.allPrismicHomepage.nodes[0].data.vision_image.localFile && data.allPrismicHomepage.nodes[0].data.vision_image.localFile.childImageSharp &&data.allPrismicHomepage.nodes[0].data.vision_image.localFile.childImageSharp.sizes ? data.allPrismicHomepage.nodes[0].data.vision_image.localFile.childImageSharp.sizes : null

    const sponsors = data.allPrismicHomepage.nodes[0].data.sponsors
    const latestNews = data.allPrismicNewsarticle.nodes
  return (
    <Layout>
    <Col xs={12}>
        <BannerWrap>
            <Img fluid={bannerImage}/>
            <BannerTitle>{bannerTitle}</BannerTitle>
        </BannerWrap>
    </Col>
      <Col xs={12} md={8}>
      {missionTitle ? <h2>{missionTitle}</h2> : null}
        {mission ? <div className="justified" dangerouslySetInnerHTML={{ __html: mission }} /> : null }
      </Col>
      <Col xs={12} md={4}>
      {latestNews ? 
        latestNews.map(newsArticle =>{
            return (<NewsLink href={'news/'+newsArticle.uid}>

            {newsArticle.data.news_title ? <h3>{newsArticle.data.news_title.text}</h3> : null} 
            {newsArticle.data.news_date ? <h4>{newsArticle.data.news_date}</h4> : null} 
            {newsArticle.data.news_abstract ? <div dangerouslySetInnerHTML={{ __html: newsArticle.data.news_abstract.html }}/> : null} 
            {newsArticle.data.body && newsArticle.data.body[0].body_image && newsArticle.data.body[0].body_image.localFile &&newsArticle.data.body[0].body_image.localFile.childImageSharp &&newsArticle.data.body[0].body_image.localFile.childImageSharp.sizes ? <Img fluid={newsArticle.data.body[0].body_image.localFile.childImageSharp.sizes}/> : null} 
            </NewsLink>
            )
        })
      : null}
      </Col>
      <Col xs={12}>
        <h2>{visionTitle}</h2>
        {visionText ? <div className="justified" dangerouslySetInnerHTML={{ __html: visionText }} /> : null}
        <Img fluid={visionImage} />
        <SponsorsWrapper>
            {sponsors.map(sponsor => {
              return sponsor.sponsor_logo ? (
                <SponsorWrapper target="_blank" href={sponsor.sponsor_link ? sponsor.sponsor_link.url : null }>
                  <Img
                      fluid={sponsor.sponsor_logo.localFile.childImageSharp.sizes}
                    />
                </SponsorWrapper>
              ) : null
            })}
        </SponsorsWrapper>
      </Col>
    </Layout>
  )
}
export default Home

export const query = graphql`
  query HomeQuery {
    allPrismicHomepage {
      nodes {
        data {
            vision_text {
              html
            }
          bannerimage {
            localFile {
              childImageSharp {
                sizes(quality: 90, maxWidth: 1200) {
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
          banner_title {
            text
          }
          mission_title {
            html
            text
          }
          mission_text {
            html
          }
          vision_title {
            html
            text
          }
          vision_image {
            localFile {
              childImageSharp {
                sizes(quality: 90, maxWidth: 1200) {
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
          sponsors {
            sponsor_link {
              url
            }
            sponsor_logo {
              localFile {
                childImageSharp {
                  sizes(quality: 90, maxWidth: 1200) {
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
          }
        }
      }
    }
    allPrismicNewsarticle(sort: {fields: data___news_date, order: DESC}, limit: 2) {
      nodes {
        data {
          news_title {
            text
          }
          news_date(formatString: "D, MMMM YYYY")
          news_abstract {
            html
            text
          }
          body {
            body_text {
              html
            }
            body_image {
              localFile {
                childImageSharp {
                  sizes(quality: 90, maxWidth: 1200) {
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
          }
        }
        uid
      }
    }
  }
`
