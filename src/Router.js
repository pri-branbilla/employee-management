import React from 'react'
import { Scene, Router, Actions } from 'react-native-router-flux'
import { LoginForm, EmployeeList, EmployeeCreate } from './components'

const RouterComponent = () => (
  <Router>
    <Scene key="root" hideNavBar>
      <Scene key="auth">
        <Scene key="login" component={LoginForm} title="Login" />
      </Scene>
      <Scene key="main">
        <Scene
          rightTitle="Add"
          onRight={() => Actions.employeeCreate()}
          key="employeeList"
          component={EmployeeList}
          title="Employees"
          initial
        />
        <Scene
          key="employeeCreate"
          component={EmployeeCreate}
          title="NewEmployee"
        />
      </Scene>
    </Scene>
  </Router>
)

export default RouterComponent
