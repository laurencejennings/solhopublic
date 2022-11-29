import React from "react"
import { Link } from "gatsby"
import Avatar from "src/components/core/avatar"
import Card from "src/components/core/card"
import CardContent from "src/components/core/card-content"
import styled from "styled-components"
import ResponsiveFlex from "src/components/core/responsiveflex"
import Img from "gatsby-image/withIEPolyfill"
import colors from "src/components/core/theme/colors"

const TitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Varela Round";
  a {
    h3 {
      color: ${colors.darkGray};
    }
  }
`

const PreviewWrapper = styled.div`
  flex-basis: 100%;
  margin-bottom: 1rem;
  cursor: pointer;
  text-decoration: none;
  @media (min-width: 1200px) {
    flex-basis: 50%;
  }
  p{text-decoration: none;
  }
  p{
    text-decoration: none;
    color: ${colors.textGray};
  }

  }
`

const RoundedCard = styled(Card)`
  border-radius: 10px;
  overflow: hidden;
`

const StyledRespFlex = styled(ResponsiveFlex)`
  /* flex-direction: row; */
  height: 100%;
`

const LeftPageImgWrap = styled.div`
  flex-grow: 1;
  img,
  .gatsby-image-wrapper {
    padding: 1rem 0;
    max-height: 20rem;
    img {
      border-radius: 4px;
      height: 100%;
      width: 100%;
      object-fit: contain;
    }
  }
`

const AvatarWrap = styled.div`
  display: flex;
  justify-self: flex-end;
`

const CardContentDark = styled(CardContent)`
  flex-basis: 50%;
  @media screen and (min-width: 800px){
   flex-basis: 35%;   
  }
  flex-grow: 1;
  flex-shrink: 1;
  display: flex;
  flex-direction: column;
  padding-top: 3rem;
  padding-left: 3rem;
  padding-bottom: 20px;
  padding-right: 20px;
  background-image: ${({ previewCover }) =>
    previewCover
      ? "url(" +
        previewCover.md.url +
        ")"
      : null};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-blend-mode: overlay;
`

const CardContentLight = styled(CardContent)`
  background-color: ${colors.white};
  flex-basis: 50%;
  p{
      margin: 0;
  }
  @media screen and (max-width: 576px){
   min-height: 10rem;  
  }
  @media screen and (min-width: 800px){
   flex-basis: 75%;   
  }
  flex-grow: 1;
  flex-shrink: 1;
  padding-top: 3rem;
  padding-right: 3rem;
  padding-bottom: 20px;
  padding-left: 20px;
  position: relative;
`

const Title = styled.h3`
  font-weight: normal;
  font-size: 2rem;
  margin: 0;
  color: ${colors.darkGray};
`

const Subtitle = styled.h4`
  font-weight: normal;
  font-style: italic;
  font-size: 1.2rem;
  margin: 0;
  margin-top: 0.5rem;
  margin-bottom: 4rem;
  color: ${colors.white};
`

const PostDate = styled.h4`
  font-weight: normal;
  font-size: 0.7rem;
  margin: 0;
  align-self: center;
  margin-left: 1rem;
  color: white;
  color: lighten(black, 100%);
  text-transform: capitalize;
  font-family: "Varela Round";
`

const Abstract = styled.p`
  font-weight: normal;
  font-size: 1.2rem;
  /* position: absolute; */
    right: 3rem;
    left: 20px;
`

const CoverQuote = styled.h4`
  font-size: 1.2rem;
  font-weight: 100;
  font-style: italic;
  color: white;
`

const QuoteAuthor = styled.h4`
  font-size: 1rem;
  font-weight: 100;
  font-style: italic;
  color: white;
`

const ReadMoreWrapper = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
/* height: 7rem; */
/* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#ffffff+0,ffffff+39,ffffff+39,ffffff+39&0+0,1+50 */
background: -moz-linear-gradient(top,  rgba(255,255,255,0) 0%, rgba(255,255,255,0.78) 39%, rgba(255,255,255,1) 50%); /* FF3.6-15 */
background: -webkit-linear-gradient(top,  rgba(255,255,255,0) 0%,rgba(255,255,255,0.78) 39%,rgba(255,255,255,1) 50%); /* Chrome10-25,Safari5.1-6 */
background: linear-gradient(to bottom,  rgba(255,255,255,0) 0%,rgba(255,255,255,0.78) 39%,rgba(255,255,255,1) 50%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00ffffff', endColorstr='#ffffff',GradientType=0 ); /* IE6-9 */

a{
    position: absolute;
    bottom: 1.5rem;
}

`

const PostPreview = ({
  uid,
  title,
  subtitle,
  bookCover,
  cover,
  date,
  coverQuote,
  quotes,
  previewCover,
  previewavatar,
  abstract
}) => {
  const ciccio = (e)=>{e.target.getElementsByTagName('h3')[0].click()}
  var words = []
  var abstractPrev = null
  if(abstract){
      
      for(let i =0;i<abstract.length;i++){
          if(abstract[i] === " "){
              words.push(i)
            }
        }
        if(coverQuote){
            abstractPrev = words.length > 59 ? abstract.slice(0,words[60]) : abstract    
        } else {
            abstractPrev = words.length > 39 ? abstract.slice(0,words[40]) : abstract
        }
    } 
  return (
    <PreviewWrapper>
      <RoundedCard>
        <StyledRespFlex bp={"576px"}>
          <CardContentDark previewCover={previewCover}>
            {coverQuote ? <CoverQuote>"{coverQuote}"</CoverQuote> : null}
            {quotes
              ? quotes.map(quote => (
                  <div>
                    <CoverQuote>
                      {quote.quote_text ? quote.quote_text.text : null}
                    </CoverQuote>
                    <QuoteAuthor>
                      {quote.quote_author ? quote.quote_author.text : null}
                    </QuoteAuthor>
                  </div>
                ))
              : null}
            <LeftPageImgWrap></LeftPageImgWrap>
            <AvatarWrap>
              {previewavatar ? (
                <Avatar
                photo={previewavatar ? previewavatar : null}
                dS={"3rem"}
                dL={"5rem"}
                bp={"576px"}
                />
              ) : (
                <Avatar
                photo={cover ? cover : null}
                dS={"3rem"}
                dL={"5rem"}
                bp={"576px"}
                />
              )}
              {date ? <PostDate>{date}</PostDate> : null}
            </AvatarWrap>
          </CardContentDark>
          <CardContentLight>
                    <Title>{title}</Title>
            <Abstract dangerouslySetInnerHTML={{ __html: abstract }} />
          {/* <Abstract>
              {abstract ? abstract : null}
          </Abstract> */}
          {/* <ReadMoreWrapper>
              <Link to={uid}> ... Read more</Link>
          </ReadMoreWrapper> */}
            {/* {bookCover ? <Img fluid={bookCover}
                objectFit="contain" objectPosition="100% 50%"
                /> : null} */}
          </CardContentLight>
        </StyledRespFlex>
      </RoundedCard>
    </PreviewWrapper>
  )
}

export default PostPreview
