import * as React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const HeaderStyled = styled.header`
  background-color: #181818;
  text-align: center;
  margin-bottom: 20px;
  padding: 20px;

  a {
    text-decoration: none;
    padding: 10px;
  }
`

export const Header = props =>
    <HeaderStyled>
        <NavLink exact activeClassName={ 'active' } to={ '/' }>
            Home
        </NavLink>
        <NavLink exact activeClassName={ 'active' } to={ '/profile/edit' }>
            Edit
        </NavLink>
        <NavLink exact activeClassName={ 'active' } to={ '/profile' }>
            Profile
        </NavLink>
    </HeaderStyled>
