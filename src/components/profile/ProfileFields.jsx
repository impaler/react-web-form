import * as React from 'react'
import { ProfileColors } from '../../styles/colors'
import styled from 'styled-components'

const FieldValueStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 46px;
  border-radius: 23px;

  color: ${ProfileColors.secondaryText};
  background-color: ${ProfileColors.secondaryBackground};

  span {
    padding-left: 20px;
  }
`
export const FieldValue = ({ value }) =>
    <FieldValueStyled>
        <span>{ value }</span>
    </FieldValueStyled>

const LabelStyled = styled.div`
  color: ${ProfileColors.primaryText};
  padding-bottom: 10px;
`
const FieldLabel = ({ label }) =>
    <LabelStyled>
        { label }:
    </LabelStyled>

const FieldStyled = styled.div`
  width: 100%;
`

export const Field = ({ label, value }) =>
    <FieldStyled>
        <FieldLabel label={ label }/>
        <FieldValue value={ value }/>
    </FieldStyled>
