import React, { useState, useCallback } from "react"
import styled from 'styled-components';
import colors from 'src/components/core/theme/colors';
import shadows from 'src/components/core/theme/shadows';
import ReactTooltip from 'react-tooltip'
import Project from "../../templates/project";

const StyledPin = styled.div`
cursor: pointer;
    width: 1.2rem;
    height: 1.2rem;
    border-radius: 50%;
    /* overflow: hidden; */
    border: solid 1px ${colors.darkOrange};
    box-shadow: ${shadows(5)};
    transition: all 0.2s;
    &:hover{
    box-shadow: ${shadows(5)};
        transform: scale(1.2);
        .tooltip{
        transform: none;
        z-index: 100000;

        }
    }
    position: absolute;
    top: ${lat=>lat.lat+"%"};
    left: ${long=>long.long+"%"};
    .pinclickable{
        height: 70%;
        width: 70%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 50%;
        background-color: ${colors.darkOrange};
    }
`
const Tooltip = styled.div`
    position: absolute;
    top: ${lat=>lat.lat+"%"};
    left: ${long=>"calc(" +long.long+"% + 1.5rem)"};
    /* bottom: -1.5rem; */
    opacity: ${({open})=>open ? 1 : 0};
    width: ${({open})=>open ? "auto" : 0};
    height: ${({open})=>open ? "auto" : 0};
    background-color: #444444;
    color: white;
    border: solid 1px black;
    border-radius: 8px;
    padding: 0.2rem 0.3rem;
    z-index: 100000;
`

const Close = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
`

const Pin = ({title, subtitle, link, lat, long})=>{
    const [openT, setOpen] = useState(false);
    const memoizedOpen = useCallback(() => {
        console.log(openT)
        setOpen(!openT)
      }, [openT])
return (
    <>
    <StyledPin onClick={memoizedOpen} lat={lat} long={long}>
        <a className="pinclickable"/>
    </StyledPin>
        <Tooltip  lat={lat} long={long} className="tooltip" open={openT}>
            <Close onClick={memoizedOpen} >&times;</Close>
            <a href={link}>

            <p>{title}</p>
            <p>{subtitle}</p>
            </a>
            
        </Tooltip>
</>
    
)
}

export default Pin