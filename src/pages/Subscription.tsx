import React from 'react'
import styled from "@emotion/styled"

const Container = styled.div`
color: black;
padding: 0 30px;
`
const Wrapper = styled.div``
const First = styled.div`
display: flex;
justify-content: space-between;
margin: 10px;
a{
  text-decoration: none;
}
`
const Second = styled.div`
margin-top: 20px;
margin-bottom: 30px;
`
const Third = styled.div`
padding: 6px 20px;
width: 250px;
border: 1px solid lightgrey;
border-radius: 6px;
margin: 0 auto;
text-align: center;
`
const Left = styled.div``
const Box = styled.div`

width: 250px;
height: 400px;
border-radius: 10px;
background-color: gray;
`
const Write = styled.div`
p{
  color: lightgray;
}
`
const H3 = styled.h4`
width: 200px;
height: 35px;
margin: 10px 0;
`
const H4 = styled.h4`
width: 350px;
`
const WriteLatest = styled.div`
  display: flex;
  margin-top: 10px;
  gap: 10px;
`
const Latest = styled.div``
const LatestHold = styled.div``
const LatestBox = styled.div`
background-color: gray;
width: 400px;
height: 250px;
border-radius: 8px;
`
const Icon2 = styled.div``
const Icon = styled.div`
  border-radius: 50%;
  background-color: red;
  width: 40px;
  height: 40px;
`

const Subscription:React.FC = () => {
  return (
    <Container>
      <Latest>
      <First>
            <p>Latest</p>
            <a href="#"> Manage</a>
        </First>
        
        <LatestHold>
          <LatestBox></LatestBox>
          <WriteLatest>
            <Icon></Icon>
           <Icon2>
           <H4>BlockChain interview Questions and Answers | BlockChain technology | Blockchain |...</H4>
            <p>edureka!</p>
           </Icon2>
           
          </WriteLatest>
        </LatestHold>
      </Latest>
      <Wrapper>
        <First>
           <Left> <p>Shorts</p></Left>
            <a href="#"> View all</a>
        </First>
        <Second>
          <Box></Box>
          <Write>
            <H3>CS2 os Out... and so are the Skins</H3>
            <p>views</p>
          </Write>
        </Second>
        <Third>
          Show More
        </Third>
      </Wrapper>
    </Container>
  )
}

export default Subscription