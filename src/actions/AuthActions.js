import * as firebase from 'firebase'
import { Actions } from 'react-native-router-flux'
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
} from './types'

export const emailChanged = text => ({
  type: EMAIL_CHANGED,
  payload: text,
})

export const passwordChanged = text => ({
  type: PASSWORD_CHANGED,
  payload: text,
})

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user,
  })

  Actions.main()
}

const loginUserFail = (dispatch) => {
  dispatch({
    type: LOGIN_USER_FAIL,
  })
}

export const loginUser = ({ email, password }) => (dispatch) => {
  dispatch({
    type: LOGIN_USER,
  })
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(user => loginUserSuccess(dispatch, user))
    .catch(() => {
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(user => loginUserSuccess(dispatch, user))
        .catch(() => loginUserFail(dispatch))
    })
}
