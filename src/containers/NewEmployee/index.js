/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
// eslint-disable-next-line import/named
import { employeeUpdate, employeeCreate } from '../../actions'
import { EmployeeCreate } from '../../components'

class NewEmployee extends Component {
  updateName = text => this.props.employeeUpdate({
    prop: 'name',
    value: text,
  })

  updatePhone = text => this.props.employeeUpdate({
    prop: 'phone',
    value: text,
  })

  updateShift = text => this.props.employeeUpdate({
    prop: 'shift',
    value: text,
  })

  onButtonPress = () => {
    const { name, phone, shift } = this.props
    return this.props.employeeCreate({ name, phone, shift })
  }

  render() {
    const { name, phone, shift } = this.props
    return (
      <EmployeeCreate
        name={name}
        phone={phone}
        shift={shift}
        onChangeEmail={this.updateName}
        onChangePassword={this.updatePhone}
        onChangeShift={this.updateShift}
        onSubmit={this.onButtonPress}
      />
    )
  }
}

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm
  return { name, phone, shift }
}

NewEmployee.propTypes = {
  name: PropTypes.string,
  phone: PropTypes.string,
  shift: PropTypes.string,
  employeeUpdate: PropTypes.func,
  employeeCreate: PropTypes.func,
}

NewEmployee.defaultProps = {
  name: '',
  phone: '',
  shift: '',
  employeeUpdate: () => {},
  employeeCreate: () => {},
}

export default connect(
  mapStateToProps,
  {
    employeeUpdate,
    employeeCreate,
  }
)(NewEmployee)
