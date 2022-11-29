import React from "react"
import Layout from "src/components/core/layout/layout"
import { graphql } from "gatsby"
import { Container, Row, Col } from "react-grid-system"
import styled from "styled-components"
import colors from "src/components/core/theme/colors"
import GatsbyLink from "gatsby-link"
import Img from "gatsby-image"

const Benefits = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 2rem 0 5rem 0;
`

const Benefit = styled.div`
    flex: 0 1 23%;
    text-align: center;
    margin: 1rem 0;
`

const BenefitImage = styled.div`
    width: 65%;
    margin: auto;
    img{
        width: 100%;
        object-fit: contain;
    }
`

const BenefitName = styled.h5`
    font-weight: bold;
    font-size: 1.2rem;
    margin: 1rem 0 0.2rem 0;
`

const BenefitDescription = styled.p`
    text-align: center;
    font-size: 1rem;
    margin: 0.5rem;
`


const Technology = ({ data }) => {
  const benefits = data.prismicTechnologypage.data.benefits && data.prismicTechnologypage.data.benefits[0]
    ? data.prismicTechnologypage.data.benefits
    : null
  const technology = data.prismicTechnologypage.data.technology_section
    ? data.prismicTechnologypage.data.technology_section.html
    : null
    const benefits_title = data.prismicTechnologypage.data.benefits_title 
    ? data.prismicTechnologypage.data.benefits_title.html
    : null



  return (
    <Layout>
      <Col xs={12}>
        <div dangerouslySetInnerHTML={{ __html: technology }} />
      </Col>
      <Col xs={12}>
          {benefits.length ? 
               <> <div  dangerouslySetInnerHTML={{ __html: benefits_title }} />
            <Benefits>
              {benefits.map(benefit=>{
                  return <Benefit>
                    <BenefitImage>
                    {benefit.image && benefit.image.localFile && benefit.image.localFile.childImageSharp && benefit.image.localFile.childImageSharp.fluid ? <Img fluid={benefit.image.localFile.childImageSharp.fluid}/> : null}
                    </BenefitImage>
                    {benefit.name ? <BenefitName>{benefit.name.text}</BenefitName> : null}
                    {benefit.description ? <BenefitDescription>{benefit.description.text}</BenefitDescription> : null}
                </Benefit>
            })}
            </Benefits></>
            : null }
            </Col>
            </Layout>
  )
}
export default Technology

export const query = graphql`
  query TechnologyQuery {
    prismicTechnologypage {
      data {
        benefits_title{
            html
        }
        technology_section {
          html
        }
        benefits {
            description {
              text
            }
            image {
              localFile {
                childImageSharp {
                  fluid {
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
            name {
              text
            }
        }
      }
    }
  }
`
