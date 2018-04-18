import * as React from 'react'
import styled from 'styled-components'

import { ProfileColors } from '../../styles/colors'

export const ProfileFormField = styled.input.attrs({
    autocomplete: 'off'
})`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  width: 100%;
  height: 40px;
  box-sizing: border-box;
  border-radius: 38px;

  border: none;
  color: ${ProfileColors.secondaryText};
  background-color: ${ProfileColors.tertiaryBackground};
  
  &::placeholder {
    color: ${ProfileColors.tertiaryText};
  }
`

export const ProfileFormSubmitButton = styled.input`
  width: 100%;
  height: 46px;
  border-radius: 23px;

  border: none;
  color: ${ProfileColors.secondaryText};
  background-color: ${ProfileColors.secondaryBackground};
  text-align: center;
  cursor: pointer;
`
