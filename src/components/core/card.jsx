import React from "react"
import theme from "src/components/core/theme/theme"
import shadow from "src/components/core/theme/shadows"
import styled from "styled-components"

const StyledCard = styled.div`
  /* padding: 1rem; */
  border-radius: 8px;
  box-shadow: ${props=>props.elevation ? shadow(props.elevation) : shadow(3)};
  background-color: #ffffff;
  justify-content: space-between;
  z-index: 10;
  margin-bottom: 2rem;
  ${props=>props.sticky ? "position: sticky; top:4rem;" : null};

`
const Card = ({ children, sticky, elevation, className }) => {
  return <StyledCard className={className} elevation={elevation} sticky={sticky}>{children}</StyledCard>
}

export default Card
