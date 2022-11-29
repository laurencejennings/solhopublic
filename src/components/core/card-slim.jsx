import React from "react"
import styled from "styled-components"
import shadow from "components/theme/shadows"

const StyledCardSlim = styled.div`
  padding: 0.5rem 0.5rem 1rem 0.5rem;
  box-shadow: ${shadow(3)};
  flex-shrink: 0;
  flex-basis: 50%;
  border-radius: 8px;
  background-color: #f3f3f3;
  @media (max-width: 576px){
      margin-bottom: 0.5rem;
  }
`

const CardSlim = ({children}) =>{
    return (<StyledCardSlim>
        {children}
    </StyledCardSlim>)
}

export default CardSlim