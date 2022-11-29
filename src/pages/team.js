import React from "react"
import Layout from "src/components/core/layout/layout"
import { graphql } from "gatsby"
import { Container, Row, Col } from "react-grid-system"
import styled from "styled-components"
import colors from "src/components/core/theme/colors"
import GatsbyLink from "gatsby-link"
import Img from "gatsby-image"
import Member from 'src/components/team/member';
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
const Team = ({ data }) => {
  const title = data.prismicTeampage.data.team_title
    ? data.prismicTeampage.data.team_title.html
    : null
    const bannerImage = data.prismicTeampage.data.team_banner && data.prismicTeampage.data.team_banner.localFile && data.prismicTeampage.data.team_banner.localFile.childImageSharp && data.prismicTeampage.data.team_banner.localFile.childImageSharp.sizes ?  data.prismicTeampage.data.team_banner.localFile.childImageSharp.sizes : null
    const teamMembers = data.prismicTeampage.data.team_members

  return (
    <Layout>
      <Col xs={12}>
      <div dangerouslySetInnerHTML={{__html:title}}/>
        <BannerWrap>
          <Img fluid={bannerImage} />
        </BannerWrap>
      </Col>
      <Col xs={12} >
          {teamMembers.map((member, i)=>{
              console.log(member,i)
              return <Member 
                name={member.member_name ? member.member_name.text : null}
                role={member.member_role ? member.member_role.text : null}
                photo={member.member_photo && member.member_photo.localFile && member.member_photo.localFile.childImageSharp && member.member_photo.localFile.childImageSharp.sizes ? member.member_photo.localFile.childImageSharp.sizes : null}
                description={member.member_description ? member.member_description.html : null}
                mail={member.mail ? member.mail.url : null}
                linkedin={member.linkedin_link ? member.linkedin_link.url : null}
                side={i%2 === 0? "left" : "right"}
            />
          })}
      </Col>
    </Layout>
  )
}
export default Team

export const query = graphql`
query TeamQuery {
    prismicTeampage {
      data {
        team_title {
          html
        }
        team_banner {
          localFile {
            childImageSharp {
              sizes(maxWidth: 1200){
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
        team_members {
          member_name {
            text
          }
          member_role {
            text
          }
          member_photo {
            localFile {
              childImageSharp {
                sizes(maxWidth: 400){
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
          member_description {
            html
          }
          mail {
            url
          }
          linkedin_link {
            url
          }
        }
      }
    }
  }
  
`
