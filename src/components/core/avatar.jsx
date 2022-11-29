import React from 'react';
import styled from 'styled-components';
// import Img from 'gatsby-image';
import Img from "gatsby-image/withIEPolyfill"

const StyledFrame = styled.div`
    width: ${props=>props.dS};
    height: ${props=>props.dS};
    border-radius: 50%;
    overflow: hidden;
    margin: ${props=>props.margin ? props.margin : 0};
    flex-grow: 0;
    flex-shrink: 0;
    @media screen and (min-width: ${props=>props.bp}){
        width: ${props=>props.dL};
        height: ${props=>props.dL};
    }
    .gatsby-image-wrapper{
        height: 100%;
        width: 100%;
    }

`

const Avatar = ({dS, dL, bp, photo, margin, className})=>{
    return (<StyledFrame 
        dS={dS}
        dL={dL}
        bp={bp}
        margin={margin}
        className={className}
    >
    {photo !== null ? 
        <Img fluid={photo}
                  objectFit="cover"
                  objectPosition="50% 50%"
        /> : null
    }
    </StyledFrame>)
}

export default Avatar