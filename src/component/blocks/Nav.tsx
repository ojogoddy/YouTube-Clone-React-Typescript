import React, { useContext } from 'react'
import styled from '@emotion/styled'
import {FaMicrophone} from "react-icons/fa"
import {AiOutlineSearch} from "react-icons/ai"
import {BiBell} from "react-icons/bi"
import {AiOutlineVideoCameraAdd} from "react-icons/ai"
import {AiOutlineMenu} from "react-icons/ai"
import {PiNumberNineBold} from "react-icons/pi"
import youtube from "../../assets/you.png"
import { GlobalContext } from '../../services/GlobalContext'

const Container = styled.div`
background-color: white;
position: fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;
color: black;
display: flex;
height: 70px;
align-items: center;
justify-content: space-between;
padding: 0 60px 0 15px;
z-index: 5;
box-shadow: wheat;
`
const First = styled.div`
display: flex;
align-items: center;
`
const Second = styled.div`
display: flex;
align-items: center;
`
const Third = styled.div`
display: flex;
align-items: center;
font-size: 30px;
gap: 30px;
`
const Menu = styled.div`
margin-right: 20px;
font-size: 30px;
margin-top: 6px;

`
const Hamb = styled.div``
const Logo = styled.img`
width: 110px;
height: 28px;
`
const Input = styled.input`
background-color: transparent;
border: none;
outline: none;
width: 600px;
height: 50px;
margin: 0 15px;
font-size: 17px;
::placeholder{
   font-size: 17px;
}
`
const Inner = styled.div`
width: 650px;
height: 50px;
border: 1px solid grey;
border-bottom-left-radius: 25px;
border-top-left-radius: 25px;
display: flex;
border-top-right-radius: 25px;
border-bottom-right-radius: 25px;
overflow: hidden;
`
const Mic = styled.div`
background-color: lightgray;
padding: 10px;
height: 20px;
width: 20px;
border-radius: 50%;
font-size: 20px;
color: black;
margin-left: 20px;
`
const UserName = styled.div`
padding: 10px;
background-color: lightgray;
border-radius: 50%;
height: 20px;
width: 20px;
font-size: 20px;
`
const SearchInner = styled.div`
width: 50px;
border-left: 1px solid grey;
padding: 10px;
font-size: 25px;
background-color: lightgray;

`


const Nav:React.FC = () => {
    const {ToggleSideBar} = useContext
    (GlobalContext)
  return (
    <Container>
        <First>
          <Hamb>
          <Menu 
           onClick={ToggleSideBar}
           >
           <AiOutlineMenu/>
           </Menu>
          </Hamb>
            <Logo src={youtube} />
        </First>
        <Second>
            <Inner>
                <Input placeholder='Search' />
                <SearchInner><AiOutlineSearch/></SearchInner>
            </Inner>
            <Mic><FaMicrophone/></Mic>
        </Second>
        <Third>
            <AiOutlineVideoCameraAdd/>
            <BiBell/>
            <UserName><PiNumberNineBold/></UserName>
        </Third>

    </Container>
  )
}

export default Nav