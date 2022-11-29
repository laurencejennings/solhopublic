import React from "react"
import Layout from "src/components/core/layout/layout"
import { graphql } from "gatsby"
import { Container, Row, Col } from "react-grid-system"
import styled from "styled-components"
import colors from "src/components/core/theme/colors"
import GatsbyLink from "gatsby-link"
import Img from "gatsby-image"
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
    const newsTitle = data.prismicNewspage.data.news_title ? data.prismicNewspage.data.news_title.html : null
    const newsText = data.prismicNewspage.data.news_text ? data.prismicNewspage.data.news_text.html : null
    const bannerImage = data.prismicNewspage.data.news_banner && data.prismicNewspage.data.news_banner.localFile && data.prismicNewspage.data.news_banner.localFile.childImageSharp && data.prismicNewspage.data.news_banner.localFile.childImageSharp.sizes ?  data.prismicNewspage.data.news_banner.localFile.childImageSharp.sizes : null
    const newsArticles = data.allPrismicNewsarticle.nodes
    console.log(data);
  return (
    <Layout>
      <Col xs={12}>
      <div dangerouslySetInnerHTML={{__html:newsTitle}}/>
        <BannerWrap>
          <Img fluid={bannerImage} />
        </BannerWrap>
      <div dangerouslySetInnerHTML={{__html:newsText}}/>
      </Col>
      <Col xs={12}>
          {newsArticles.map(newsArticle => 
            {console.log(newsArticle);
            return <PostPreview 
                uid={"news/"+newsArticle.uid}
  title={newsArticle.data.news_title ? newsArticle.data.news_title.text : null}
  date={newsArticle.data.news_date ? newsArticle.data.news_date : null}
  previewCover={newsArticle.data.body && newsArticle.data.body[0] && newsArticle.data.body[0].body_image  && newsArticle.data.body[0].body_image.md ? newsArticle.data.body[0].body_image  :null }
  previewavatar={newsArticle.data.avatar_image && newsArticle.data.avatar_image.localFile && newsArticle.data.avatar_image.localFile.childImageSharp &&newsArticle.data.avatar_image.localFile.childImageSharp.sizes ? newsArticle.data.avatar_image.localFile.childImageSharp.sizes :null }
  abstract={newsArticle.data.news_abstract ? newsArticle.data.news_abstract.html : null}
             />
          })}

      </Col>
    </Layout>
  )
}
export default Technology

export const query = graphql`
query NewsPage {
    prismicNewspage {
      data {
        news_title {
          html
        }
        news_banner {
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
        news_text {
          html
        }
      }
    }
    allPrismicNewsarticle(sort: {fields: data___news_date, order: DESC}) {
      nodes {
        data {
          news_title {
            text
          }
          news_date(formatString: "D, MMMM YYYY")
          news_abstract {
            html
          }
          has_page
          body {
            body_image {
                md {
                  url
                }
              }
            
          }
        }
        uid
      }
    }
  }
  
  
`
