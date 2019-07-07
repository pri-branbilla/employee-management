import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers'
import { LoginForm } from './components'


const App = () => (
  <Provider store={createStore(reducers)}>
    <LoginForm />
  </Provider>
)

export default App
