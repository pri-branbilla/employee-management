import * as firebase from 'firebase'
import { Actions } from 'react-native-router-flux'
import 'firebase/firestore'
import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE,
  EMPLOYEE_FETCH_SUCCESS,
  EMPLOYEE_SAVE_SUCCESS,
  EMPLOYEE_DELETE_SUCCESS,
} from './types'

export const employeeUpdate = ({ prop, value }) => ({
  type: EMPLOYEE_UPDATE,
  payload: { prop, value },
})

export const employeeCreate = ({ name, phone, shift }) => {
  const { currentUser } = firebase.auth()
  return (dispatch) => {
    firebase.firestore().collection(`users/${currentUser.uid}/employees`)
      .add({
        name,
        phone,
        shift,
      })
      .then(() => {
        dispatch({ type: EMPLOYEE_CREATE })
        Actions.pop()
      })
      .catch(error => console.log(error))
  }
}

export const employeeSave = ({
  name,
  phone,
  shift,
  id,
}) => {
  const { currentUser } = firebase.auth()
  return (dispatch) => {
    firebase.firestore().collection(`users/${currentUser.uid}/employees`)
      .doc(id)
      .update({
        name,
        phone,
        shift,
      })
      .then(() => {
        dispatch({
          type: EMPLOYEE_SAVE_SUCCESS,
        })
        Actions.pop()
      })
      .catch(error => console.log(error))
  }
}

export const employeeFetch = () => {
  const { currentUser } = firebase.auth()
  return (dispatch) => {
    firebase.firestore().collection(`users/${currentUser.uid}/employees`)
      .onSnapshot((docs) => {
        if (docs.empty) {
          console.log('no doc')
        } else {
          console.log(docs.docs)
          dispatch({
            type: EMPLOYEE_FETCH_SUCCESS,
            payload: docs.docs,
          })
        }
      })
  }
}

export const employeeDelete = ({ id }) => {
  const { currentUser } = firebase.auth()
  return (dispatch) => {
    firebase.firestore().collection(`users/${currentUser.uid}/employees`)
      .doc(id).delete()
      .then(() => {
        dispatch({
          type: EMPLOYEE_DELETE_SUCCESS,
        })
        console.log('DELETED')
        Actions.pop()
      })
      .catch(error => console.log(error))
  }
}
