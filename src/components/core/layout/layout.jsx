import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Header from "src/components/core/layout/header/header"
import Footer from "src/components/core/layout/footer/footer"
import "src/components/core/layout/resetcss.css"
import { Container, Row, Col } from "react-grid-system"
import { setConfiguration } from "react-grid-system"
import colors from "src/components/core/theme/colors"
import Spacer from "src/components/core/spacer"

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  @media screen and (max-width: 576px){
      
      padding-bottom: ${({bookLink})=>bookLink ? "4rem" : 0 };
    }
`

const Grower = styled.div`
flex: 1 1 100%;

`

const StyledContainer = styled(Container)`
  @media (max-width: 800px) {
    margin-bottom: 5rem;
  }
`

const StyledMain = styled.main`
  flex-grow: 1;
  min-height: calc(100vh - 95px);
  display: flex;
  position: relative;
  flex-direction: column;
  background-color: ${colors.lightOrange};
`

const Layout = ({
  children,
}) => {
  
  return (
    <StyledLayout>
      <Header />
      <Grower>

      <StyledContainer>
      <Spacer/>
        <Row justify="center">
        {children}
        </Row>
      </StyledContainer>
      </Grower>
      <Footer />
    </StyledLayout>
  )
}

export default Layout
