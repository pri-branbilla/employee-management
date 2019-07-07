import React, { Component } from 'react'
import * as firebase from 'firebase'
import ReduxThunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'
import { LoginForm } from './components'

class App extends Component {
  componentDidMount = () => {
    firebase.initializeApp({
      apiKey: 'AIzaSyAc_hGLjVYBLNS1h4pNiMRSI72A2pOv6Mw',
      authDomain: 'rnauth-d23ab.firebaseapp.com',
      databaseURL: 'https://rnauth-d23ab.firebaseio.com',
      projectId: 'rnauth-d23ab',
      storageBucket: '',
      messagingSenderId: '873867629031',
      appId: '1:873867629031:web:dd72bf2b72045b67',
    })
  }

  render = () => (
    <Provider store={
      createStore(reducers, {}, applyMiddleware(ReduxThunk))
    }
    >
      <LoginForm />
    </Provider>
  )
}

export default App
