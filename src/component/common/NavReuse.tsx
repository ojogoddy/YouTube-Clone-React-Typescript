import React from 'react'
import styled from "@emotion/styled"
import { NavLink } from 'react-router-dom';

interface Iprops{
    text:string;
    icon:any;
    linkto:string
  
}
const Container = styled.div`
margin-top: 5px;
margin-right: 2px;
`
const Icon = styled.div``
const IconHold = styled.div`
display: flex;
align-items: center;
font-size: 21px;
gap: 25px;
padding-left: 10px;
padding-top: 3px;
font-weight: 500;
height: 40px;

:hover{
    background-color: #d3d3d3be;
    border-radius: 15px;
}
`

const Para = styled.p`
font-size: 16px;
`

const NavReuse:React.FC<Iprops> = ({text, icon, linkto}) => {
  return (
    <Container>
        <NavLink to={linkto}
        style={{
            color:"black",
            textDecoration:"none"
        }}>
            <IconHold>
                 <Icon>{icon}</Icon>
                <Para>{text}</Para>
            </IconHold>

        </NavLink>
    </Container>
  )
}

export default NavReuse