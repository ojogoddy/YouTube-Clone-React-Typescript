import React from 'react'
import styled from "@emotion/styled"
import { NavLink } from 'react-router-dom';
interface Iprops{
    text:string;
    icon:any;
    linkto:string

}
const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
overflow: hidden;
`
const Hold = styled.div`
text-align: center;
padding: 15px 20px;


:hover{
    background-color: #d3d3d3be;
    border-radius: 15px;
    
}
`
const Icon = styled.div`
font-size: larger;
`
const Para = styled.div`
font-size: 12px;
`
const NavUse:React.FC<Iprops> = ({text, icon, linkto}) => {
  return (
    <Container>
        <NavLink to={linkto} 
        style={{
            color: "black",
            textDecoration: "none"
        }}
        >
            <Hold>
                <Icon>{icon}</Icon>
                <Para>{text}</Para>
            </Hold>
           
        </NavLink>
    </Container>
  )
}

export default NavUse