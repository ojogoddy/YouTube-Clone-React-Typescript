import React, { useEffect, useState } from 'react'
import styled from "@emotion/styled"
import Cards from '../component/common/Cards'
import { SearchYouTubeVideo } from '../utils/ApiCalls'
import ButtonReuse from '../component/common/ButtonReuse'


const Container = styled.div`
overflow-x: hidden;
border-radius: 10px;
color: black;
`
const Hold = styled.div`
display: flex;
align-items: center;
gap: 20px;
font-size: 18px;
position: fixed;
z-index: 3;
background-color: white;
top: 70px;
height: 70px;
width: 100%;
padding-left: 30px;
margin-bottom: 10px;
`
const Holder = styled.div`
padding: 0 30px;
display: flex;
align-items: center;
gap: 30px;
flex-wrap: wrap;
margin-top: 50px;
`
const HomeScreen:React.FC = (id:any) => {
  const [SearchData, setSearchData] = useState([])
  const FetchSearchdata = async ()=>{
    await SearchYouTubeVideo(id).then((res)=>{
      console.log("oboy",res.contents);
      setSearchData(res?.contents)
    })
  }
  useEffect(()=>{
    FetchSearchdata()
  }, [])
  const All = ["all", "music", "gaming", "comedy", "trailer", "series", "machines", "coding", "sewing", "independence", "praise", "church"]
  return (
    <Container>
      <Hold>
       {All.map((text, index)=>(
         <ButtonReuse key={index} text={text} />
       ))}
       
      </Hold>
      <Holder>
        {SearchData?.map((props) =>(
          <Cards props={props} bdd='' />
        ))}
      </Holder>
    </Container>
  )
}

export default HomeScreen