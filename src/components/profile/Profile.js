import * as React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { ProfileColors } from '../../styles/colors'
import { getCurrentAge } from '../../utils/age-util'
import { Field } from './ProfileFields'

const ProfileLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 330px;
  padding-left: 20px;
  padding-right: 20px;

  border-radius: 20px;
  background-color: ${ProfileColors.primaryBackground};
  color: ${ProfileColors.text};

  & > div {
    padding-top: 20px;
  }

  & > div:last-child {
    padding-bottom: 44px;
  }
`

export const ProfileField = ({ name, age, email }) =>
    <ProfileLayout >
        <Field value={ name } label={ 'Name' }/>
        <Field value={ age } label={ 'Age' }/>
        <Field value={ email } label={ 'Email' }/>
    </ProfileLayout >

export const ProfileDisplay = ({ profile }) => {
    const { day, month, year, name, email } = profile
    const age = day === null ?
        day : // display nothing when no user is present
        getCurrentAge(day, month, year)
    // needs some better validation elsewhere

    return <ProfileField { ...{ name, email, age } } />
}

export const Profile = connect(
    state => ({ profile: state.profile })
)(ProfileDisplay)
