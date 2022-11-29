import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const StyledH2 = styled.h2`
  font-family: "Cinzel", "serif";
  font-weight: normal;
  display: flex;
  font-size: 1rem;
  margin-bottom: 0;
  margin-top: 0;
  transition: font-size 0.5s;

  *, a{
  text-decoration: none;
  }
`
const FontLg = styled.span`
  font-size: 2em;
  font-family: "Cinzel";
  letter-spacing: 5px;
`

const Smaller = styled.span`
    font-size: 70%;
`

const Logo = () => {
  
  return (
    <StyledH2 id="js-header">
      <FontLg><Smaller>THISWAS</Smaller>ROME</FontLg>
    </StyledH2>
  )
}

export default Logo
