import React from 'react'
import { Scene, Router, Actions } from 'react-native-router-flux'
import {
  EmployeesList,
  NewEmployee,
  EditEmployee,
  Login,
} from './containers'

const RouterComponent = () => (
  <Router>
    <Scene key="root" hideNavBar>
      <Scene key="auth">
        <Scene key="login" component={Login} title="Login" />
      </Scene>
      <Scene key="main">
        <Scene
          rightTitle="Add"
          onRight={() => Actions.employeeCreate()}
          key="employeeList"
          component={EmployeesList}
          title="Employees"
          initial
        />
        <Scene
          key="employeeCreate"
          component={NewEmployee}
          title="NewEmployee"
        />
        <Scene
          key="employeeEdit"
          component={EditEmployee}
          title="EditEmployee"
        />
      </Scene>
    </Scene>
  </Router>
)

export default RouterComponent
