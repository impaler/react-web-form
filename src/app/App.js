import * as React from 'react'
import { Switch, Route } from 'react-router'
import { ConnectedRouter } from 'react-router-redux'
import { Provider } from 'react-redux'

import { globalStyle } from '../styles/global'
import { Header } from '../components/header/Header'
import { ProfileRoute } from '../routes/profile/ProfileRoute'
import { HomeRoute } from '../routes/home/HomeRoute'
import { ProfileEditRoute } from '../routes/profile-edit/ProfileEditRoute'
import { configureStore, history } from '../store'

globalStyle()

const AppRoutes = () =>
    <main>
        <Header/>
        <Switch>
            <Route exact path={ '/profile/edit' }
                render={ () => <ProfileEditRoute/> }
            />
            <Route path={ '/profile' }
                render={ () => <ProfileRoute/> }
            />
            <Route render={ () => <HomeRoute/> }/>
        </Switch>
    </main>

const store = configureStore()

export const App = props =>
    <Provider store={ store }>
        <ConnectedRouter history={ history }>
            <AppRoutes/>
        </ConnectedRouter>
    </Provider>
