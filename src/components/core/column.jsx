import React from 'react';
import styled from 'styled-components';

const StyledCol = styled.div`
    flex-basis: ${basis=>100*12/basis}%;
    padding: 4px 0%;
    margin: 4px 0;
`

const Column = ({basis, children}) =>{
    return(
        <StyledCol basis={basis}>
            {children}
        </StyledCol>
    )
}

export default Column

