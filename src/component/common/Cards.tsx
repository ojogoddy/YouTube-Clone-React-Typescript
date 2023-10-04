import React, { useState } from 'react'
import styled from "@emotion/styled"
import ReactPlayer from "react-player"
import { Link } from 'react-router-dom'
import { abbreviateNumber } from "js-abbreviation-number";

const Container=styled.div`
width: 300px;
height:300px;
border-radius: 10px;
overflow: hidden;
color: black;
`
const CardHold = styled.div`
border-radius: 10px;
position: relative;
`
const Image = styled.img`
    height: 200px;
	background-color: white;
	margin-bottom: 10px;
	width: 300px;
	object-fit: cover;
`
const VideoLength = styled.div`
position: absolute;
bottom: 80px;
right: 10px;
background-color: #ffffff8e;
font-size: 14px;
padding: 2px 8px;
border-radius: 10px;
display: flex;
justify-content: center;
align-items: center;
`
const UserHold = styled.div`
display: flex;
`
const UName = styled.div`
width: 200px;
height: 50px;
overflow: hidden;
color: black;
`
const User = styled.img`
height: 50px;
width: 50px;
background-color: black;
border-radius: 50%;
margin-right: 10px;
object-fit: cover;
`
const Player = styled.div``
interface iCard{
    bdd:string
    props: any
}
const Cards:React.FC<iCard> = ({ props}) => {
    const [show, setShow] = useState(false);
    const [indexed, setIndexed] = useState(false);
    console.log(indexed)
  return (
    <Container>
        <CardHold
        onMouseOver={()=>{
            setShow(true);
            setIndexed(props?.video?.videoId)
        }}
        onMouseLeave={()=>{
            setShow(false)
        }}
         >
            <Link 
                    style={{
                        textDecoration:"none",
                        color: "white"
                    }}
                    to={`/watch/${props?.video?.videoId}`}>
            {show && indexed === props?.video?.videoId ? (
                
               <Player>
                 <ReactPlayer
                    playing={true}
                    width={300}
                    height={200}
                    style={{
                        height:"200px",
                        width:"300px",
                        marginBottom:"10px"
                    }}
                    url={`https://www.youtube.com/watch?v=${props?.video?.videoId}`} />
               </Player>
            ) : (
                <Image className="img" src={props?.video?.thumbnails[0]?.url} />
            )}
            <VideoLength>{props?.video?.lengthText}</VideoLength>
            <UserHold>
                <User className="img" src={props?.video?.thumbnails[0]?.url} />
                
                    <UName>{props?.video?.title}</UName>
                
                
            </UserHold>
            </Link>
            <div>
						{abbreviateNumber(
							Number(
								props?.video?.viewCountText
									?.split(" ")[0]
									?.split(",")
									?.join(""),
							),
						)}
					</div>
        </CardHold>
    </Container>
  )
}

export default Cards