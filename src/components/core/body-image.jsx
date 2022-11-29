import React from 'react';
import Img from 'gatsby-image';
// import Img from "gatsby-image/withIEPolyfill"
import styled from 'styled-components';


const ImageWrap = styled.div`
/* width: ${({imagestyle})=> imagestyle=="fullwidth" ? 'calc(100% + 2rem)' : 'auto'};
margin-left: ${({imagestyle})=> imagestyle=="fullwidth" ? '-1rem' : 'unset'};
height: ${({imageheight, imagestyle})=> imagestyle=="fullheight" ? imageheight+"rem" : 'auto'}; */
${({imagestyle, imagedimension})=>{
    if(imagestyle==="fullwidth"){
        return (
            `
            width: calc(100% + 2rem);
            margin-left: -1rem;
            `
        )
    } else if(imagestyle=="setheight"){
        return (
            `
            max-width: 100%;
            width: auto;
            height: ${imagedimension}rem;
            margin: auto;
            `
        )
    } else if(imagestyle=="setwidth"){
        return (
            `
            max-width: 100%;
            height: auto;
            width: ${imagedimension}rem;
            margin: auto;
            `
        )
    }
}}
.gatsby-image-wrapper {
    height: 100%;
    width: 100%;
  }
`

const ImageCaption = styled.p`
    font-style: italic;
    text-align: center;
    p{
        margin-top: 0.5rem;
    }
    margin-bottom: 2rem;
    width: 80%;
    margin:auto;
`

const BodyImage = ({image, caption, imagestyle, imagedimension, className})=>{
    return(
        <>
        <ImageWrap className={className} imagedimension={imagedimension} imagestyle={imagestyle} >
            <Img fluid={image}
                  style={{ maxHeight: "100%" }}
    imgStyle={{ objectFit: "contain" }}

            />
        </ImageWrap>
        <ImageCaption>
            {caption}
        </ImageCaption>
         </>
    )
}

export default BodyImage