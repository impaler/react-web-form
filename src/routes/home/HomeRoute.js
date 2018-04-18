import * as React from 'react'
import styled from 'styled-components'

const HomeStyled = styled.div`

  h1 {
    text-align: center;
    font-size: 20px;
    font-weight: lighter;
  }
  
  ol {
    margin: 0 auto; 
    width: 300px;
  }

`

export const HomeRoute = () =>
    <HomeStyled>
        <h1>
            Welcome to the most awesome<br/>
            React web form application ever created
        </h1>

        <br/>

        <ol>
            <li>Click Edit in the header</li>
            <li>Fill out the form</li>
            <li>Hit the submit button</li>
            <li>It will redirect you to the profile route</li>
        </ol>
    </HomeStyled>
