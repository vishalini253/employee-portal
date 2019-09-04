import React from 'react'
import { Router } from 'react-router-dom'
import { Route, Switch } from 'react-router'
import { LoginPage, DashBoardPage } from './views/pages'
import { history } from '../src/views/history'

function isAuth(nextState, replace) {
  console.log('App', this)
  if (this.props.isLoginSuccess) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route key={'login'} path="/" component={LoginPage}  exact strict/>
        <Route key={'home'} path="/login" component={LoginPage} exact strict/>
        <Route key={'dashboard'} path="/dashboard" component={DashBoardPage} onEnter={isAuth}  />
      </Switch>
    </Router>
  )
}

export default App
export { App }
