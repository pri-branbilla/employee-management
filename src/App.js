import React from 'react'
import { View } from 'react-native'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers'
import { LoginForm } from './components'


const App = () => (
  <Provider store={createStore(reducers)}>
    <View style={{ flex: 1 }}>
      <LoginForm />
    </View>
  </Provider>
)

export default App
