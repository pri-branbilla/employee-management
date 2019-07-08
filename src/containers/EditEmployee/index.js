/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Communications from 'react-native-communications'
import { each } from 'lodash'
import { connect } from 'react-redux'
// eslint-disable-next-line import/named
import { employeeUpdate, employeeSave, employeeDelete } from '../../actions'
import { EmployeeForm, ConfirmModal } from '../../components'

class EditEmployee extends Component {
  state = {
    modalVisible: false,
  }

  componentDidMount = () => {
    each(this.props.employee.data(), (value, prop) => {
      this.props.employeeUpdate({ prop, value })
    })
  }

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
    this.props.employeeSave({
      name,
      phone,
      shift,
      id: this.props.employee.id,
    })
  }

  onTextButtonPress = () => {
    const { phone, shift } = this.props
    Communications.text(phone, `Your upcoming shift is on ${shift}`)
  }

  onFirePress = () => {
    this.setState({
      modalVisible: true,
    })
  }

  onAccept = () => this.props.employeeDelete({ id: this.props.employee.id })

  render() {
    const {
      name,
      phone,
      shift,
    } = this.props
    const {
      modalVisible,
    } = this.state
    return (
      <React.Fragment>
        <EmployeeForm
          edit
          name={name}
          phone={phone}
          shift={shift}
          onChangeEmail={this.updateName}
          onChangePassword={this.updatePhone}
          onChangeShift={this.updateShift}
          onSubmit={this.onButtonPress}
          onText={this.onTextButtonPress}
          onFire={this.onFirePress}
        />
        <ConfirmModal
          modalText="Are you sure you want to delete this?"
          modalVisible={modalVisible}
          onAccept={() => this.onAccept()}
          onDecline={() => this.setState({ modalVisible: false })}
        />
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm
  return { name, phone, shift }
}

EditEmployee.propTypes = {
  name: PropTypes.string,
  phone: PropTypes.string,
  shift: PropTypes.string,
  employee: PropTypes.object,
  employeeUpdate: PropTypes.func,
  employeeSave: PropTypes.func,
  employeeDelete: PropTypes.func,
}

EditEmployee.defaultProps = {
  name: '',
  phone: '',
  shift: '',
  employee: {},
  employeeUpdate: () => {},
  employeeSave: () => {},
  employeeDelete: () => {},
}

export default connect(
  mapStateToProps,
  {
    employeeUpdate,
    employeeSave,
    employeeDelete,
  }
)(EditEmployee)
