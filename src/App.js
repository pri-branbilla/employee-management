import React, { useEffect } from 'react'
import * as firebase from 'firebase'
import ReduxThunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'
import Router from './Router'

const App = () => {
  useEffect(() => {
    firebase.initializeApp({
      apiKey: 'AIzaSyAc_hGLjVYBLNS1h4pNiMRSI72A2pOv6Mw',
      authDomain: 'rnauth-d23ab.firebaseapp.com',
      databaseURL: 'https://rnauth-d23ab.firebaseio.com',
      projectId: 'rnauth-d23ab',
      storageBucket: '',
      messagingSenderId: '873867629031',
      appId: '1:873867629031:web:dd72bf2b72045b67',
    })
  }, [])

  return (
    <Provider store={
      createStore(reducers, {}, applyMiddleware(ReduxThunk))
    }
    >
      <Router />
    </Provider>
  )
}

export default App
