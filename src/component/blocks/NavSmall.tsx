import React from 'react'
import styled from "@emotion/styled"
import NavUse from '../common/NavUse'
import {AiFillHome} from "react-icons/ai"
import {SiShortcut} from "react-icons/si"
import {MdOutlineSubscriptions} from "react-icons/md"
import {MdOutlineVideoLibrary} from "react-icons/md"

const Container = styled.div`
background-color: white;
width: 90px;
position: fixed;
top: 70px;
bottom: 0;
left: 0;
right: 0;
`

const NavSmall:React.FC = () => {
  return (
    <Container>
      <NavUse icon={<AiFillHome/>} text="Home" linkto="/" />
      <NavUse icon={<SiShortcut/>} text="Shorts" linkto="/shorts" />
      <NavUse icon={<MdOutlineSubscriptions/>} text="Subscription" linkto="/subscription" />
      <NavUse icon={<MdOutlineVideoLibrary/>} text="Library" linkto="/library" />
    </Container>
  )
}

export default NavSmall