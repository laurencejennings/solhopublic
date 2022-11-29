import React, { useState, useCallback } from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import styled from "styled-components"
import Image from "gatsby-image"
import { Container, Row, Col } from "react-grid-system"
import theme from "src/components/core/theme/theme"
import shadow from "src/components/core/theme/shadows"
import Logo from "src/images/logos/solho_logo.jpg"
import colors from "src/components/core/theme/colors"
// import Facebook from "src/images/logos/facebook.svg"
// import Instagram from "src/images/logos/instagram.svg"
// import Twitter from "src/images/logos/twitter.svg"

const StyledHeaderWrapper = styled.div`
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 1000;
  box-shadow: ${shadow(10)};
  padding: 0.5rem 0;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: unset;
  img {
    height: 3rem;
  }
`

const StyledContainer = styled(Container)`
  padding-top: 0;
  padding-bottom: 0;
`

const StyledHeader = styled.header`
  position: relative;
  @media (min-width: 576px) {
    display: flex;
  }
  justify-content: space-between;
  margin: 0 0.5rem 0 0.5rem;
`
const StyledBar = styled.div`
  width: 1.8rem;
  height: 0.2rem;
  border-radius: 5px;
  background-color: black;
  flex-grow: 0;
  flex-shrink: 1;
`

const StyledButton = styled.div`
  height: 1.5rem;
  width: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  @media (min-width: 576px) {
    display: none;
  }
  position: absolute;
  right: 0;
  top: 0.2rem;
`

const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  text-align: center;

  transition: max-height 0.3s;
  @media (max-width: 576px) {
    overflow: hidden;
    max-height: ${props => (props.open ? "10rem" : "0")};
  }
  @media (min-width: 576px) {
    flex-direction: row;
  }
  font-family: "Cinzel";
  a {
    line-height: 2;
    color: black;
    text-decoration: none;
    margin: 0 1rem;
    align-self: center;
  }
`
const SocialWrapper = styled.div`
  display: flex;
  align-self: center;
  @media screen and (min-width: 576px) {
    margin-right: 1rem;
  }
`

const SocialLink = styled.a`
  height: 1.5rem;
  width: 1.5rem;
  margin: 0 0.5rem;

  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
`

const LogoWrapper = styled.span`

`

const Circle = styled.div`
  position: absolute;
  height: 3rem;
  width: 3rem;
  border-radius: 50%;
  overflow: hidden;
  background-color: ${colors.darkOrange};
  z-index: -9;
  left: 50%;
  top: 0;
  transform: translate(-50%, 0);
`

const Bar = styled.div`
  position: absolute;
  height: 0.5rem;
  width: 100%;
  background-color: white;
  z-index: 10;
  bottom: 0.5rem;
`

const LogoText = styled.h2`
  text-align: center;
  position: relative;
margin: 0;
  height: 3rem;
`
const LogoTextSpan = styled.span`
z-index: 11;
line-height: 3rem;
height: 3rem;
`

const Header = () => {
  const [open, setOpen] = useState(false)
  const memoizedOpen = useCallback(() => {
    console.log(open)
    setOpen(!open)
  }, [open])
  
  return (
    <StyledHeaderWrapper>
      <StyledContainer>
        <StyledHeader>
          <StyledLink to="/">
            <img src={Logo} />
            {/* <Image fluid={Logo}/> */}
            {/* <LogoWrapper>

            <LogoText><LogoTextSpan>
                SOLHO
            </LogoTextSpan>
            
            <Circle />
            <Bar />
            </LogoText>
            </LogoWrapper> */}
          </StyledLink>
          <StyledButton onClick={memoizedOpen}>
            <StyledBar />
            <StyledBar />
            <StyledBar />
          </StyledButton>
          <StyledNav open={open}>
            {/* <SocialWrapper>
            {data.prismicAbout.data.twitter ? 
              <SocialLink href={ data.prismicAbout.data.twitter.url} >
                <img src={Twitter} />
              </SocialLink>
              : null}
            {data.prismicAbout.data.instagram ? 
              <SocialLink href={ data.prismicAbout.data.instagram.url} >
                <img src={Instagram} />
              </SocialLink>
              : null}
            {data.prismicAbout.data.facebook ? 
              <SocialLink href={ data.prismicAbout.data.facebook.url} >
                <img src={Facebook} />
              </SocialLink>
              : null}
            </SocialWrapper> */}
            <Link to="/technology">Technology</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/services">Services</Link>
            <Link to="/news">News</Link>
            <Link to="/team">Team</Link>
            <Link to="/contacts">Contacts</Link>
          </StyledNav>
        </StyledHeader>
      </StyledContainer>
    </StyledHeaderWrapper>
  )
}

export default Header
