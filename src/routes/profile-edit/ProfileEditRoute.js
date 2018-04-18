import * as React from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'

import { withProfileForm } from '../../components/profile-form/withProfileForm'
import { ProfileForm } from '../../components/profile-form/ProfileForm'
import { action_SubmitProfile } from '../../store/profile-reducer'

const mapSubmitFormToProps = dispatch => ({
    submitForm: (profile) => dispatch(
        action_SubmitProfileForm(profile)
    )
})

function action_SubmitProfileForm (profile) {
    return (dispatch) => {
        dispatch(action_SubmitProfile(profile))
        // todo the setTimeout is a pretty ugly
        // better to look into some ux design, like a transition and
        // extra validation of the form input
        setTimeout(() => {
            dispatch(push('/profile'))
        }, 500)
    }
}

export const ProfileEditRoute = connect(
    state => state.profile,
    mapSubmitFormToProps
)(withProfileForm(ProfileForm))
