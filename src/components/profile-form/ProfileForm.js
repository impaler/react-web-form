import * as React from 'react'
import styled from 'styled-components'

import { ProfileFormField, ProfileFormSubmitButton } from './ProfileFormFields'

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 340px;
  padding-left: 20px;
  padding-right: 20px;
  box-sizing: border-box;
  margin: 0 auto;

  input {
    box-sizing: border-box;
    margin-top: 10px;
  }
`

const HFieldBox = styled.span`
  display: flex;

  input {
    margin-right: 10px;
  }

  input:last-child {
    margin-right: 0;
  }
`

export const ProfileForm = ({ onChange, onSubmit, name, email, month, day, year }) =>
    <FormStyled onSubmit={ onSubmit }>
        <ProfileFormField
            id="name"
            type="text"
            value={ name }
            placeholder={ 'Name' }
            onChange={ onChange }
            required
        />
        <HFieldBox>
            <ProfileFormField
                id="day"
                type="number"
                value={ day }
                placeholder={ 'DD' }
                onChange={ onChange }
                required
                min="1"
            />
            <ProfileFormField
                id="month"
                type="number"
                value={ month }
                placeholder={ 'MM' }
                onChange={ onChange }
                required
                min="1"
                max="12"
            />
            <ProfileFormField
                id="year"
                type="number"
                value={ year }
                placeholder={ 'YY' }
                onChange={ onChange }
                required
                min="0"
            />
        </HFieldBox>
        <ProfileFormField
            id="email"
            type="email"
            value={ email }
            placeholder={ 'email@domain.com' }
            onChange={ onChange }
            required
        />
        <ProfileFormSubmitButton
            type="submit"
            value="Submit"
        />
    </FormStyled>
