import React from 'react';
import {Link} from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import Card from 'src/components/core/card';
import CardContent from 'src/components/core/card-content';
import Avatar from 'src/components/core/avatar';
import ResponsiveFlex from 'src/components/core/responsiveflex';

const TitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 2rem;
`

const AvatarWrap = styled.div`
  display: flex;
`

const Title = styled.h3`
  font-weight: normal;
  font-size: 2rem;
margin: 0;
`

const BookWrap = styled.div`
    display: flex;
`

const QuotesWrap = styled.div`
    display: block;
`

const Quote = styled.p`
    font-style: italic;
    font-weight: normal;
    font-size: 1rem;
`

const Abstract = styled.p`
  font-weight: normal;
  font-size: 1rem;
`
const BookPreview = ({title, uid, cover, abstract, quotes})=>{
    return(
        <Card>
        <CardContent>

      <ResponsiveFlex bp={"576px"}>
          <AvatarWrap>
            <Avatar
              photo={cover ? cover : null}
              dS={"2rem"}
              dL={"4rem"}
              bp={"576px"}
            />
        <TitleWrap>
            <Link to={"book/"+uid}>
            <Title>{title}</Title>
            </Link>
        </TitleWrap>
          </AvatarWrap>
        <Abstract dangerouslySetInnerHTML={{ __html: abstract }} />
        {quotes ? (
                <QuotesWrap>
                    <Quote>{quotes[0]}</Quote> 
                </QuotesWrap>
            ) : null}
      </ResponsiveFlex>
    </CardContent>

        </Card>
    )
}

export default BookPreview