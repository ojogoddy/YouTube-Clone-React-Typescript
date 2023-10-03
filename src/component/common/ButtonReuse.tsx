import React from 'react'
import styled from "@emotion/styled"

const Container = styled.div``
const ButHold = styled.button`
padding: 7px 15px;
font-size: 15px;
border-radius: 10px;
background-color: #80808084;
border: none;
outline: none;
color: black;
cursor: pointer;
:hover{
    background-color: lightgrey;
    color: black;
}
`

interface Iprops{
    text:string
}

const ButtonReuse:React.FC<Iprops> = ({text}) => {
  return (
    <Container>
        <ButHold>
            {text}
        </ButHold>
    </Container>
  )
}

export default ButtonReuse