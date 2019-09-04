import React from 'react'
import { Router } from 'react-router-dom'
import { Route, Switch } from 'react-router'
import { LoginPage, DashBoardPage } from './views/pages'
import { history } from '../src/views/history'

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route key={'home'} path="/" component={LoginPage}  exact strict/>
        <Route key={'login'} path="/login" component={LoginPage} exact strict/>
        <Route key={'dashboard'} path="/dashboard" component={DashBoardPage} />
      </Switch>
    </Router>
  )
}

export default App
export { App }
