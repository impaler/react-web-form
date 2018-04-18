import { createStore, applyMiddleware, combineReducers } from 'redux'
import { routerMiddleware, routerReducer } from 'react-router-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import {
    initialProfileState,
    profileReducer
} from './profile-reducer'
import { createBrowserHistory } from 'history'

const initialState = {
    profile: initialProfileState,
    router: {
        location: '/'
    }
}

export const history = createBrowserHistory()
const historyMiddleware = routerMiddleware(history)

export function configureStore () {

    let middleware = applyMiddleware(
        thunk,
        historyMiddleware
    )

    if (process.env.NODE_ENV !== 'production') {
        middleware = composeWithDevTools(middleware)
    }

    return createStore(rootReducer, initialState, middleware)
}

export const rootReducer = combineReducers({
    router: routerReducer,
    profile: profileReducer,
})
