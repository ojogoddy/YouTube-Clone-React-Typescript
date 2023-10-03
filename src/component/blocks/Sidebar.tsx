import React, {useContext} from 'react'
import styled from "@emotion/styled"
import NavReuse from '../common/NavReuse'
import { AiFillHome } from 'react-icons/ai'
import { SiShortcut } from 'react-icons/si'
import { GoHistory } from 'react-icons/go'
import { MdOutlineWatchLater } from 'react-icons/md'
import { BiLike } from 'react-icons/bi'
import { ImNewspaper } from 'react-icons/im'
import { GoTrophy } from 'react-icons/go'
import { BsFlag } from 'react-icons/bs'
import { FiHelpCircle } from 'react-icons/fi'
import { RiFeedbackLine } from 'react-icons/ri'
import { AiOutlineSetting } from 'react-icons/ai'
import { SiYoutubegaming } from 'react-icons/si'
import { FiTrendingUp  } from 'react-icons/fi'
import { MdOutlineVideoLibrary } from 'react-icons/md'
import { MdOutlineSubscriptions} from 'react-icons/md'
import { GlobalContext } from '../../services/GlobalContext'

const Container = styled.div`
width: 280px;
position: fixed;
top: 70px;
left: 0;
right: 0;
bottom: 0;
background-color: white;
overflow-y: scroll;
`
const SmallContainer = styled.div``
const Wrapper1 = styled.div`
margin-left: 15px;
`

const Wrapper4 = styled.div`
border-top: 1px solid lightgrey;
margin-left: 15px;
margin-top: 10px;
`
const Para = styled.p`
margin: 17px 0 10px 10px;
font-size: 18px;
color: black;
`
const Parag = styled.p`
margin: 17px 0 10px 10px;
font-size: 15px;
font-weight: 500;
line-height: 19px;
color: #4f4e4e;
span{
  font-size: 13px;
  padding-bottom: 20px;
}
`
const Circle = styled.div`
  background-color: lightgrey;
  height: 30px;
  width: 30px;
  border-radius: 50%;
`
const Sub = styled.div`
  display: flex;
  align-items: center;
  gap: 23px;
  margin-left: 5px;
`
const Circles = styled.div`
color: black;
`
const Blue = styled.div`
  background-color: skyblue;
  height: 6px;
  width: 6px;
  border-radius: 90%;
  margin-left: 90px;

`


const Sidebar:React.FC = () => {
   const {toggle} = useContext
    (GlobalContext)

  return (
    <div>
      {toggle? (
        <SmallContainer>

        </SmallContainer>
      ): (
        <Container>
          <Wrapper1>
          <NavReuse icon={<AiFillHome/>} text="Home" linkto="/" />
          <NavReuse icon={<SiShortcut/>} text="Shorts" linkto="/shorts" />
          <NavReuse icon={<MdOutlineSubscriptions/>} text="Subscription" linkto="/subscription" />
          <NavReuse icon={<MdOutlineSubscriptions/>} text="DetailedVideo" linkto="/detailedvideo" />
          </Wrapper1>
          <Wrapper4>
          <NavReuse icon={<MdOutlineVideoLibrary/>} text="Library" linkto="/library" />
          <NavReuse icon={<GoHistory/>} text="History" linkto="/history" />
          <NavReuse icon={<MdOutlineSubscriptions/>} text="Your video" linkto="/yourvideo" />
          <NavReuse icon={<MdOutlineWatchLater/>} text="Watch later" linkto="/watchlater" />
          <NavReuse icon={<BiLike/>} text="Liked video" linkto="/subscription" />
          <NavReuse icon={<MdOutlineSubscriptions/>} text="How to Play Chess" linkto="/subscription" />
          </Wrapper4>
          <Wrapper4>
          <Para>Subscription</Para>
          <Sub>
          <Circle></Circle>
          <Circles> WWE </Circles>
          <Blue></Blue>
          </Sub>
          
          </Wrapper4>
          <Wrapper4>
          <Para>Explore</Para>
          <NavReuse icon={<FiTrendingUp />} text="Trending" linkto="/trending" />
          <NavReuse icon={<SiShortcut/>} text="Music" linkto="/music" />
          <NavReuse icon={<SiYoutubegaming/>} text="Gaming" linkto="/gaming" />
          <NavReuse icon={<ImNewspaper/>} text="News" linkto="/news" />
          <NavReuse icon={<GoTrophy/>} text="Sports" linkto="/sports" />
          </Wrapper4>
          <Wrapper4>
          <Para>More from YouTube</Para>
          <NavReuse icon={<SiShortcut/>} text="YouTube Premium" linkto="/premium" />
          <NavReuse icon={<SiShortcut/>} text="YouTube Studio" linkto="/studio" />
          <NavReuse icon={<SiShortcut/>} text="YouTube Music" linkto="/music" />
          <NavReuse icon={<SiShortcut/>} text="YouTube Kids" linkto="/kids" />
          </Wrapper4>
          <Wrapper4>
          <NavReuse icon={<AiOutlineSetting/>} text="Settings" linkto="/settings" />
          <NavReuse icon={<BsFlag/>} text="Report History" linkto="/reportHistory" />
          <NavReuse icon={<FiHelpCircle/>} text="Help" linkto="/Help" />
          <NavReuse icon={<RiFeedbackLine/>} text="Send Feedback" linkto="/sendFeedback" />
          </Wrapper4>
          <Wrapper4>
            <Parag>About press copyright <br /> Contact us Creators Advertise Developers <br /><br />
            Terms privacy Policy & Safety <br />How YouTube works <br />Test new features
            <br /><br />
            <span> 2023 Google LLC</span>
            </Parag>
          </Wrapper4>
    </Container>
      )}
    </div>
  )
}

export default Sidebar