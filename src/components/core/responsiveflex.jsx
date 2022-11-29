import React from 'react';
import styled from 'styled-components';

const StyledFlex = styled.div`
    display: flex;
    flex-direction: column;
    @media (min-width: ${props=>props.bp}) {
        flex-direction: row;
    }
`

const ResponsiveFlex = ({bp, children, className})=>{
    return(
        <StyledFlex bp={bp} className={className}>
            {children}
        </StyledFlex>
    )
}

export default ResponsiveFlex