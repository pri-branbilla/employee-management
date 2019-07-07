import {
  EMPLOYEE_FETCH_SUCCESS,
  EMPLOYEE_FETCH_FAIL,
} from '../actions/types'

const INITIAL_STATE = {
  employees: [],
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_FETCH_SUCCESS:
      return { ...state, employees: action.payload }
    case EMPLOYEE_FETCH_FAIL:
      return state
    default:
      return state
  }
}
