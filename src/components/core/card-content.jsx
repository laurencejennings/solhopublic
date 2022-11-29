import React from "react"
import styled from "styled-components"

const StyledCardContent = styled.div`
  padding: 1rem;
`
const CardContent = ({ children, className }) => {
  return <StyledCardContent className={className}>{children}</StyledCardContent>
}

export default CardContent
