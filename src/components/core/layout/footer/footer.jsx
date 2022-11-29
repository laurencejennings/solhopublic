import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-grid-system';
// import Container from 'src/components/core/Container';
import theme from 'src/components/core/theme/theme';
import shadow from 'src/components/core/theme/shadows';
import Logo from "src/images/logos/solho_logo.jpg"
import { graphql, useStaticQuery, Link } from "gatsby"

const StyledLink = styled(Link)`
  text-decoration: none;
  color: unset;
  img {
    height: 3rem;
  }
`
const StyledFooter = styled.footer`
    background-color: white;
    z-index: 1000;
    box-shadow: ${shadow(10)};
    padding: 2rem 0;
padding: 0.5rem 0 0 2rem;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    h3{
        margin: 0;
        margin-bottom: 1rem;
    }
    p{
        margin: 0;
    }
    margin-top: 5rem;
`

const StyledContainer= styled(Container)`
    padding-top: 0;
    padding-bottom: 0;
`

const StyledFooterText = styled.h3`
    font-family: "Cinzel";
    font-size: 1.4rem;
    font-weight: 500; 
    text-align: right;
    padding-right: 2rem; 
    margin: 0; 
    bottom: 0;
    position: absolute;
    right: 0; 
`

const FooterLine = styled.div`
    font-size: 1.2rem;
    h3{
    font-size: 1.2rem;
    display: inline;
    margin: 0.2rem;
    font-weight: bold;
    }
    margin: 0.2rem;
    div{
        display: inline;
        p{
            margin-left: 2rem;
            display: inline;
        }
    }
`
const Wrapper = styled.div`
    padding: 1rem 0 2rem 0 ;
`
const MarginFooter = styled.footer`
    margin-top: 5rem;
`

const Footer = ()=>{
    const data = useStaticQuery(graphql`
    query MyQuery {
        prismicInfo {
          data {
            company_name {
              text
            }
            address {
              html
            }
            contact_email {
              url
            }
          }
        }
      } 
  `)
    return(
        <MarginFooter>
            <Wrapper>

        <Container>
        <Row>

        <Col xs={12} md={7}>

        <div>

            <FooterLine><h3>
                {data.prismicInfo.data.company_name ?data.prismicInfo.data.company_name.text : null}
            </h3>
            {data.prismicInfo.data.address ? <div className="address" dangerouslySetInnerHTML={{__html:data.prismicInfo.data.address.html}}/>: null}
            </FooterLine>

<FooterLine>Email: <a href={data.prismicInfo.data.contact_email ? data.prismicInfo.data.contact_email.url : null} >{data.prismicInfo.data.contact_email ? data.prismicInfo.data.contact_email.url.slice(7) : null}</a></FooterLine>
        </div>
        </Col>
        <Col xs={12} md={5}>

            <StyledFooterText><StyledLink to="/">
            <img src={Logo} />
          </StyledLink></StyledFooterText>
        </Col>
        </Row>
        </Container>
            </Wrapper>
        </MarginFooter>
    )
}

export default Footer;
