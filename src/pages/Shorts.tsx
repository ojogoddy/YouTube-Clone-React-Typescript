import React from 'react'
import styled from '@emotion/styled'
import { AiFillDislike, AiFillLike } from 'react-icons/ai'
import { BiSolidMessage } from 'react-icons/bi'
import { TiArrowForward } from 'react-icons/ti'
import { BsThreeDots } from 'react-icons/bs'

const Container = styled.div`

`
const Wrapper = styled.div`
padding-top: 40px;
display: flex;
;
`
const First = styled.div`

`
const Second = styled.div`
display: flex;
flex-direction: column;
gap: 20px;
margin-left: 20px;
`
const Mic = styled.div`
background-color: lightgray;
padding: 10px;
display: flex;
align-items: center;
justify-content: center;
height: 30px;
width: 30px;
border-radius: 50%;
font-size: 25px;
color: black;

`
const SmallBox = styled.div`
  background-color: gray;
  width: 40px;
  height: 40px;
  border-radius: 5px;
  padding: 5px;

`
const ShortsBox = styled.div`
background-color: lightgrey;
width: 400px;
height: 620px;
border-radius: 7px;
`
const Margins = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: end
`

const Shorts:React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <Margins>
          <First>
          <ShortsBox>g</ShortsBox>
          </First>
        <Second>
        <Mic><AiFillLike/></Mic>
        <Mic><AiFillDislike/></Mic>
        <Mic><BiSolidMessage/></Mic>
        <Mic><TiArrowForward/></Mic>
        <Mic><BsThreeDots/></Mic>
        <SmallBox></SmallBox>
        </Second>
        </Margins>
      </Wrapper>
    </Container>
  )
}

export default Shorts