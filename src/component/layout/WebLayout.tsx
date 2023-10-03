import styled from "@emotion/styled"
import {Outlet} from "react-router-dom"
import Nav from "../blocks/Nav"
import Sidebar from "../blocks/Sidebar"
import { useContext } from "react"
import { GlobalContext } from "../../services/GlobalContext"
import NavSmall from "../blocks/NavSmall"

const Container = styled.div`
margin-top: 90px;
`

const OutletContainer=styled.div``
export const WebLayout:React.FC =()=>{
    const {toggle} = useContext
    (GlobalContext)
    const ContainerStyle ={
        marginLeft: toggle ? "90px" : "280px" 
    }
    return(
        <Container >
            {toggle ? (<NavSmall />):(<Sidebar />)}
            <Nav />
            
           <OutletContainer style={ContainerStyle}>
           <Outlet />
           </OutletContainer>
        </Container>
    )
}