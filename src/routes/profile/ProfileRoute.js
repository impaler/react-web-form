import * as React from 'react'
import styled from 'styled-components'

import { Profile } from '../../components/profile/Profile'

const ProfileLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ProfileRoute = () =>
    <ProfileLayout>
        <Profile/>
    </ProfileLayout>
