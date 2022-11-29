import React from "react"
import Avatar from "src/components/core/avatar"
import styled from 'styled-components';
import linkedinLogo from 'src/images/logos/linkedin.svg';
import envelopeLogo from 'src/images/logos/envelope.svg';
const MemberWrap = styled.div`
    display: flex;
    flex-direction: column;
    @media screen and (min-width: 800px){
        flex-direction: row;
    }
    margin: 0 0 4rem 0;
`
const StyledAvatar = styled(Avatar)`
@media screen and (min-width: 800px){
margin: ${({side})=>side === "right" ? "0 0 0 2rem" : "0 2rem 0 0"};
order: ${({side})=>side === "right" ? 2 : 1};   
}
border-radius: 8px;
      /* -webkit-transition : -webkit-filter 500ms linear   */
/* filter: url(filters.svg#grayscale); Firefox 3.5+ */
img{filter: gray; /* IE5+ */
      -webkit-filter: grayscale(1); /* Webkit Nightlies & Chrome Canary */
      /* -webkit-transition : -webkit-filter 500ms linear  */
      -webkit-filter: grayscale(100%);
filter: grayscale(100%);
filter: gray;
/* IE 6-9 */
-moz-transition: all 0.2s ease-in;
-o-transition: all 0.2s ease-in;
-webkit-transition: all 0.2s ease-in;
transition: all 0.2s ease-in;
    }

    img:hover {
    filter: none;
      -webkit-filter: grayscale(0);
      -webkit-transform: scale(1.01);
    }
`
const Details = styled.div`
order: ${({side})=>side === "right" ? 1 : 2};
p{margin: 0.2rem 0;}
`

const Name = styled.h3`
margin: 0;

`
const Role = styled.h3`
margin: 0.2rem 0;
`

const SocialLinks = styled.div`
display: flex;
align-items: center;
margin-top: 1rem;
`
const Email = styled.a`
    width: 2rem;
    height: 2rem;
    img{
        height: 100%;
        width: 100%;
        object-fit: contain;
    }
    margin-right: 1rem;
`
const Linkedin = styled.a`
width: 2rem;
height: 2rem;
img{
    height: 100%;
    width: 100%;
    object-fit: contain;
}`
const MemberDetails = styled.div`
    p{
        margin: 1rem 0;
    }
`
const Member = ({ name, role, photo, linkedin, mail, description, side }) => {
  return (
    <MemberWrap>
      <StyledAvatar photo={photo} dS={"8rem"} dL={"13rem"} bp={"800px"} side={side}/>
      <Details side={side}>
        <Name>{name}</Name>
        <Role>{role}</Role>
        <MemberDetails dangerouslySetInnerHTML={{__html:description}}/>
        <SocialLinks>
          <Email href={mail}><img src={envelopeLogo}/></Email>
          <Linkedin href={linkedin}><img src={linkedinLogo}/></Linkedin>
        </SocialLinks>
      </Details>
    </MemberWrap>
  )
}

export default Member