import React, { useEffect, useState } from 'react'
import styled from "@emotion/styled"
import { useParams } from 'react-router-dom'
import { VideoDetail,  DetailComment } from '../utils/ApiCalls'
import { abbreviateNumber } from "js-abbreviation-number";
import { AiFillDislike, AiFillLike } from 'react-icons/ai'
import { TiArrowForward } from 'react-icons/ti'
import { BsThreeDots } from 'react-icons/bs'
import ButtonReuse from '../component/common/ButtonReuse'
import { MdOutlineSort } from 'react-icons/md'

const Container = styled.div`
margin-top: 100px;
margin-left: 20px;
display: flex;

`
const Vdeo = styled.iframe`
height: 450px;
width: 100%;
background-color: black;
border-radius: 10px;
border: none;
outline: none;
`
const UserHold = styled.div`
display: flex;
justify-content: space-between;
`
const Left = styled.div`
width: 65%;
h2{
  margin-top: 10px;
}
`
const Right = styled.div`
margin-left: 30px;
`
const One = styled.div`
display: flex;
align-items: center;
gap: 15px;
`
const Two = styled.div`
color: black;
display: flex;
align-items: center;
gap: 15px;
font-size: 25px;
`
const Three = styled.div`
  background-color: lightgrey;
  width: 100%;
  height: 100px;
  border-radius: 10px;
  margin: 10px 0 ;
  padding: 10px;
  overflow: hidden;
  /* text-overflow: ellipsis; */
  
`
const Join = styled.div`
padding: 8px 15px;
background-color: lightgrey;
border-radius: 15px;
`
const Great = styled.div`
p{
  font-size: 12px;
}
`

const Subscribe = styled.div`
padding: 8px 15px;
background-color: black;
color: white;
border-radius: 15px;
`

const Like = styled.div`
background-color: lightgrey;
padding: 5px 15px;
border-radius: 15px;
display: flex;
align-items: center;
justify-content: center;
gap: 5px;
span{
  color: gray;
}
`
const Share = styled.div`
background-color: lightgrey;
padding: 9px 20px;
display: flex;
justify-content: center;
align-items: center;
border-radius: 15px;
`
const Dot = styled.div`
border-radius: 50%;
background-color: lightgrey;
padding: 10px;
display: flex;
justify-content: center;
align-items: center;
width: 30px;
height: 30px;
`
const Hold = styled.div`
display: flex;
align-items: center;
gap: 20px;
font-size: 18px;

`
const SideSmall = styled.div`
display: flex;
margin-top: 10px;
gap: 5px;
`
const Image = styled.div`
width: 160px;
height: 100px;
border-radius: 5px;
background-color: grey;
border: none;
outline: none;
`
const Words = styled.div`
width: 220px;
font-size: 13px;
line-height: 17px;

h4{
  margin-bottom: 5px;
}
p{
  
  font-size: 13px;
}
`
const Four = styled.div`
display: flex;
gap: 40px;
margin: 20px 0;
align-items: center;
`
const Logo4 = styled.div`
display: flex;
align-items: center;
gap: 10px;
font-size: 25px;
p{
  font-size: 16px;
}
`
const Input = styled.input`
border: none;
border-bottom:  1px solid gray ;
width: 90%;

`
const Five = styled.div`
display: flex;
align-items: center;
gap: 20px;
`
const User = styled.img`
height: 50px;
width: 50px;
border-radius: 50%;
margin-right: 10px;
object-fit: cover;
`
const DetailedVideo:React.FC = () => {
    const [videoData, setVideoData] = useState<any>()
    const [videoComment, setVideoComment] = useState<any>()
    const {id} = useParams()
    console.log(id)
    console.log(videoData)
    console.log(videoComment)

    const RetrieveDetails = async () =>{
        await VideoDetail(id).then((res)=>{
            setVideoData(res?.videoDetails)
        })
        
    }
    const RetrieveDetailss = async () =>{
        await  DetailComment(id).then((res)=>{
            setVideoComment(res?.DetailComment)
        })
    }
    
    useEffect(()=>{
        RetrieveDetails()
        RetrieveDetailss()
    }, [])

    const All = ["All", "Computer Program", "Gaming"]
  return (
    <Container>
      <Left>
      <Vdeo src={`https://www.youtube.com/embed/${videoData?.videoId}`} />
      <h2>{videoData?.title} </h2>
			<UserHold>
          <One>
          
            <User className="img" src={videoData?.thumbnail?.thumbnails[0]?.url} />
            
            <Great>
              <h4>{videoData?.author}</h4>
              <p>{abbreviateNumber(Number(videoData?.viewCount))} Subscribers</p>
            </Great>
            <Join>Join</Join>
            <Subscribe>Subscribe</Subscribe>
          </One>
          <Two>
            <Like> <AiFillLike /><span>|</span> <AiFillDislike/></Like>
            <Share><TiArrowForward/></Share>
            <Dot><BsThreeDots/></Dot>
          </Two>
          
			</UserHold>
      <Three>
        <p>{videoData?.shortDescription}</p>
      </Three>
      <Four>
        {/* <p>{videoComment?.comments}</p>  */}
        
        <Logo4><MdOutlineSort></MdOutlineSort> <p>Sort by</p></Logo4>
      </Four>
      <Five>
      <Dot><BsThreeDots/></Dot>
        <Input placeholder='Add a comment' />
      </Five>
      </Left>
      <Right>
        <Hold>
       {All.map((text, index)=>(
         <ButtonReuse key={index} text={text} />
       ))}
       
      </Hold>
      <SideSmall>
          <Image></Image>
          <Words>
            <h4>How To Make a Website using HTML and CSS | Modern ...</h4>
            <p>GreatStack </p>
            <p>41k views - 9 months ago</p>
          </Words>
       </SideSmall>
      </Right>
    </Container>
  )
}

export default DetailedVideo