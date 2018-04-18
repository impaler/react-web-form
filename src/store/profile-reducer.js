export const initialProfileState = {
    name: '',
    email: '',
    day: '',
    month: '',
    year: '',
}

const SUBMIT_PROFILE = 'submit-profile'

export const action_SubmitProfile = (profile) => {
    return {
        type: SUBMIT_PROFILE ,
        payload: {
            profile
        }
    }
}

export function profileReducer (state = initialProfileState, action) {
    if (action.type === SUBMIT_PROFILE ) {
        return {
            ...{},
            ...state.profile,
            ...action.payload.profile
        }
    }
    return state
}
