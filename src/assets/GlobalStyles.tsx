import React from 'react'
import { Global, css } from '@emotion/react'


const GlobalStyles:React.FC = () => {
  return (
    <Global 
    styles={css`
    @import url("https://fonts.googleapis.com/css2?family=Bricolage+Grotesque&family=Inria+Serif:ital,wght@0,300;0,400;1,300;1,400&family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Outfit:wght@100&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,900&family=Raleway:ital,wght@0,100;0,200;0,300;1,100;1,200;1,300&family=Roboto:wght@100&family=Rubik:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500;1,600&display=swap");
         body{
            background-color: white;
            color: black;
            min-height: 100vh;
            margin: 0;
            padding: 0;
            font-family: "Montserrat", "Raleway", "Roboto", sans-serif;
            font-weight: 500;
         }
         p{
          margin: 0;
         }
         h4, h2, h3, h1, h5, h6{
          margin: 0;
         }
         `}/>
  )
}

export default GlobalStyles